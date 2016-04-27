import React from 'react';

import Immutable from 'immutable';

import { displayOrder, transforms } from 'transformime-react';

require('codemirror/mode/markdown/markdown');
require('codemirror/mode/python/python');
// TODO: consider dynamic require of languages like in nteract/nteract

import Cell from './cell';

class Notebook extends React.Component {
  constructor() {
    super();
    this.createCellElement = this.createCellElement.bind(this);
  }

  getLanguageMode() {
    // The syntax highlighting language should be set in the language info
    // object.  First try codemirror_mode, then name, and fallback on 'null'.
    let language =
      this.props.notebook.getIn(['metadata', 'language_info', 'codemirror_mode', 'name'],
      this.props.notebook.getIn(['metadata', 'language_info', 'codemirror_mode'],
      this.props.notebook.getIn(['metadata', 'language_info', 'name'],
      'text')));

    // TODO: Load the ipython codemirror mode from somewhere
    if (language === 'ipython') {
      language = 'python';
    }

    return language;
  }

  createCellElement(id) {
    const cellMap = this.props.notebook.get('cellMap');
    return (
      <div
        key={`cell-container-${id}`}
      >
        <Cell
          cell={cellMap.get(id)}
          language={this.getLanguageMode()}
          id={id}
          key={id}
          displayOrder={this.props.displayOrder}
          transforms={this.props.transforms}
          moveCell={this.moveCell}
        />
      </div>);
  }

  render() {
    const cellOrder = this.props.notebook.get('cellOrder');
    return (
      <div
        style={{
          paddingTop: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
        ref="cells"
      >
      {
        cellOrder.map(this.createCellElement)
      }
      </div>
    );
  }
}

Notebook.propTypes = {
  displayOrder: React.PropTypes.instanceOf(Immutable.List),
  notebook: React.PropTypes.any.isRequired,
  transforms: React.PropTypes.instanceOf(Immutable.Map),
};

Notebook.defaultProps = {
  displayOrder,
  transforms,
};

export default Notebook;

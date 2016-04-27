import React from 'react';

import Inputs from './inputs';

import Editor from './editor';
import Display from 'react-jupyter-display-area';

import Immutable from 'immutable';

const CodeCell = (props) =>
  <div className="cell_code">
    <div className="input_area">
      <Inputs executionCount={props.cell.get('execution_count')} running={props.running} />
      <Editor
        input={props.cell.get('source')}
        language={props.language}
      />
    </div>
    <Display
      className="cell_display"
      outputs={props.cell.get('outputs')}
      displayOrder={props.displayOrder}
      transforms={props.transforms}
    />
  </div>;

CodeCell.propTypes = {
  cell: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  displayOrder: React.PropTypes.instanceOf(Immutable.List).isRequired,
  id: React.PropTypes.string,
  language: React.PropTypes.string,
  theme: React.PropTypes.string,
  transforms: React.PropTypes.instanceOf(Immutable.Map),
  running: React.PropTypes.bool,
};

CodeCell.defaultProps = {
  running: false,
};

export default CodeCell;

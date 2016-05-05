import React from 'react';

import CodeMirror from 'react-codemirror';

export default class Editor extends React.Component {
  render() {
    const options = {
      mode: this.props.language,
      lineNumbers: this.props.lineNumbers,
      theme: this.props.theme,
      autofocus: false,
      readOnly: true,
    };
    return (
      <div className="cell_editor">
        <CodeMirror
          value={this.props.input}
          ref="codemirror"
          className="cell_cm"
          options={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  input: React.PropTypes.any,
  language: React.PropTypes.string,
  lineNumbers: React.PropTypes.bool,
  theme: React.PropTypes.string,
};

Editor.defaultProps = {
  language: 'python',
  lineNumbers: false,
  text: '',
  theme: 'composition',
};

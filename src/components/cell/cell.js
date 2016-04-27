import React from 'react';

import CodeCell from './code-cell';
import MarkdownCell from './markdown-cell';

const Cell = (props) =>
  <div className="cell">
    {
    props.cell.get('cell_type') === 'markdown' ?
      <MarkdownCell {...props} /> :
      <CodeCell {...props} />
    }
  </div>;

Cell.propTypes = {
  cell: React.PropTypes.any,
  id: React.PropTypes.string,
  focusedCell: React.PropTypes.string,
  onCellChange: React.PropTypes.func,
  running: React.PropTypes.bool,
};

export default Cell;

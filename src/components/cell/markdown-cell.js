import React from 'react';

import remark from 'remark';
import reactRenderer from 'remark-react';

const markdownRenderer = remark().use(reactRenderer);

const MarkdownCell = (props) =>
  <div className="cell_markdown rendered">
    {markdownRenderer.process(props.cell.get('source'))}
  </div>;

MarkdownCell.propTypes = {
  cell: React.PropTypes.any,
};

export default MarkdownCell;

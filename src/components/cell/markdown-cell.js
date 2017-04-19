import React from 'react';

import remark from 'remark';
import reactRenderer from 'remark-react';
import LatexRenderer from '../latex';

const markdownRenderer = remark().use(reactRenderer);

const MarkdownCell = (props) =>
  <div className="cell_markdown rendered">
    <LatexRenderer>
      {markdownRenderer.process(props.cell.get('source'))}
    </LatexRenderer>
  </div>;

MarkdownCell.propTypes = {
  cell: React.PropTypes.any,
};

export default MarkdownCell;

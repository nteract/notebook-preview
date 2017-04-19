import React from 'react';
import { loadMathJax, mathProcessor } from 'mathjax-electron';

// Initialize the mathjax renderer.
loadMathJax(document);

export default class LatexRenderer extends React.Component {
  componentDidMount() {
    mathProcessor(this.refs.rendered);
  }

  componentDidUpdate() {
    mathProcessor(this.refs.rendered);
  }

  render() {
    return (
      <div ref="rendered">{this.props.children}</div>
    );
  }
}

LatexRenderer.propTypes = {
  children: React.PropTypes.any,
};

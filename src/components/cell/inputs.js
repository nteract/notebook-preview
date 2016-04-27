import React, { PropTypes } from 'react';

export default function Inputs({ executionCount, running }) {
  const count = ! executionCount ? ' ' : executionCount;
  const input = running ? '*' : count;
  return (
    <div className="cell_inputs">
      [{input}]
    </div>
  );
}

Inputs.propTypes = {
  executionCount: PropTypes.any,
  running: PropTypes.bool,
};

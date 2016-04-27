import React from 'react';
import Notebook from './components/notebook';

import * as commutable from 'commutable';
import Immutable from 'immutable';

const NotebookPreview = (props) => {
  const nb = props.notebook;
  const notebook = Immutable.Map.isMap(nb) ? nb : commutable.fromJS(nb);
  return <Notebook notebook={notebook} />;
};

NotebookPreview.propTypes = {
  notebook: React.PropTypes.any,
};


export default NotebookPreview;

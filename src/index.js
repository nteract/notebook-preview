import React from 'react';
import Notebook from './components/notebook';

import * as commutable from 'commutable';
import Immutable from 'immutable';

const NotebookPreview = (props) => {
  if (props.notebook) {
    const nb = props.notebook;
    const notebook = Immutable.Map.isMap(nb) ? nb : commutable.fromJS(nb);
    return <Notebook notebook={notebook} />;
  } else {
    return <h1>Notebook not provided. </h1>;
  }
};

NotebookPreview.propTypes = {
  notebook: React.PropTypes.any,
};


export default NotebookPreview;

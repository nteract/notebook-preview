import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import NotebookPreview from 'notebook-preview';

import { fetchFromGist } from './fetchers';

const gistIDs = [
  '53f2d7bbc69936bd7a4131c0890fc61d',
  'ee778e32b8e62cf634929abe229a8555',
  '7eadc20426451a0604e26e6f084cac02',
  '0a9389389ec5ff303c5d5fbfa6bea021',
  'b71d96c48326a0e05904a5ad4a96d2b5',
  '93239f6b97237abf117a348a56afc9e2',
];

const gistID = gistIDs[Math.floor(Math.random() * gistIDs.length)];

class Notebook extends React.Component {
  constructor() {
    super();
    this.state = {
      nbJSON: null,
    }
  }

  componentDidMount() {
    fetchFromGist(this.props.params.gistId).then((nbJSON) => {
      console.log(nbJSON);
      this.setState({
        nbJSON
      });
    });
  }

  render() {
    if (this.state.nbJSON) {
      return <NotebookPreview notebook={this.state.nbJSON}/>;
    } else {
      return <h1>Loading Notebook...</h1>;
    }
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to={`gist/${gistID}`} />
      <Route path="gist/:gistId" component={Notebook}/>
    </Route>
  </Router>
), document.getElementById('root'));

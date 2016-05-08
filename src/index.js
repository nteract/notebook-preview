import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import NotebookPreview from 'notebook-preview';

import { fetchFromGist } from './fetchers';

const includes = require('lodash.includes');

const gistIDs = [
  '53f2d7bbc69936bd7a4131c0890fc61d',
  'ee778e32b8e62cf634929abe229a8555',
  '7eadc20426451a0604e26e6f084cac02',
  '0a9389389ec5ff303c5d5fbfa6bea021',
  'b71d96c48326a0e05904a5ad4a96d2b5',
  '93239f6b97237abf117a348a56afc9e2',
];

const Main = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const Notebook = React.createClass({
  getInitialState: function() {
    return {nbJSON: null};
  },
  componentDidMount: function() {
    fetchFromGist(this.props.params.gistId).then((nbJSON) => {
      this.setState({
        nbJSON
      });
    });
  },
  render: function() {
    if (this.state.nbJSON) {
      return <NotebookPreview notebook={this.state.nbJSON}/>;
    } else {
      return <h1>Loading Notebook...</h1>;
    }
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to={'gist/' + gistIDs[Math.floor(Math.random() * gistIDs.length)]}/>
      <Route path="gist/:gistId" component={Notebook}/>
    </Route>
  </Router>
), document.getElementById('root'));

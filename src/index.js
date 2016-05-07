import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import NotebookPreview from 'notebook-preview';

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
  render() {
    return <h1>
      Loading Notebook...
    </h1>
  }
});

const Notebook = React.createClass({
  componentDidMount() {
    this.setState({
      nbJSON: fetch(`https://api.github.com/gists/${this.props.params.gistId}`)
        .then((data) => data.json())
        .then((ghResponse) => {
          for (var file in ghResponse.files) {
            if (includes(file, '.ipynb')) {
              const fileResponse = ghResponse.files[file];
              if (fileResponse.truncated) {
                return fetch(fileResponse.raw_url)
                          .then((resp) => resp.json())
              }

              const nbString = fileResponse.content;
              const nbJSON = JSON.parse(nbString);
              return nbJSON;
            }
          }
        })
        .then((nbJSON) => {
          return nbJSON;
        })
    });
  },
  render() {
    return <NotebookPreview notebook={this.state.nbJSON}/>
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to={'gist/' + gistIDs[Math.floor(Math.random() * gistIDs.length)]}/>
      <Route path="gist/:gistId" component={Notebook}/>
    </Route>
  </Router>
), document.body);

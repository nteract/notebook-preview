import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NotebookPreview from 'notebook-preview';

const includes = require('lodash.includes');

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
    <Route path="/" component={Notebook}>
      <Route path="/gist/:gistId" component={Notebook}/>
    </Route>
  </Router>
), document.body);

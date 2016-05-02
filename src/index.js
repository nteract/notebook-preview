import React from 'react';
import { render } from 'react-dom';

import NotebookPreview from 'notebook-preview';

const includes = require('lodash.includes');

const gistIDs = [
  '53f2d7bbc69936bd7a4131c0890fc61d',
  'ee778e32b8e62cf634929abe229a8555',
  '7eadc20426451a0604e26e6f084cac02',
  '0a9389389ec5ff303c5d5fbfa6bea021',
  'b71d96c48326a0e05904a5ad4a96d2b5',
  '93239f6b97237abf117a348a56afc9e2',
  // '0787d2fd8b898368503bd9469b50383e',
  // '35fdfae490529b47e7ea2c44c144c593',
  // '1ba9b5d825af9e349bc3',
  // 'd8ac62bc0726ecdc0f22', // FIXME: notebook has HTML inside Markdown
  // 'b057942206c4e3d98153', // FIXME: notebook has inline maths
];

const gistID = gistIDs[Math.floor(Math.random() * gistIDs.length)];

fetch(`https://api.github.com/gists/${gistID}`)
  .then((data) => data.json())
  .then((ghResponse) => {
    for (var file in ghResponse.files) {
      if (includes(file, '.ipynb')) {
        const fileResponse = ghResponse.files[file];
        if(fileResponse.truncated) {
          // If truncated, fetch direct
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
    render(<NotebookPreview notebook={nbJSON}/>,
           document.getElementById('root'));
  })

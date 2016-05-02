import React from 'react';
import { render } from 'react-dom';

import NotebookPreview from 'notebook-preview';

const includes = require('lodash.includes');

const gistIDs = [
  '0787d2fd8b898368503bd9469b50383e',
  '35fdfae490529b47e7ea2c44c144c593',
  '1ba9b5d825af9e349bc3',
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
                  .then((x) => { console.log(x); return x })

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

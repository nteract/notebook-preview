import React from 'react';
import { render } from 'react-dom';

import NotebookPreview from 'notebook-preview';

const notebookJSON = require('./intro.json');

render(<NotebookPreview notebook={notebookJSON}/>,
       document.getElementById('root'));

# notebook-preview

Lightweight preview of a notebook, nteract style

* [Demo](https://nb.surge.sh)
* [Demo repo](https://github.com/rgbkrk/notebook-preview-demo)

```js
import NotebookPreview from 'notebook-preview';
ReactDOM.render(<NotebookPreview notebook={notebookJSON}/>, document.querySelector('nb'));
```

## Styling

In order to have parity with nteract styling, you'll want:

* normalize.css
* codemirror.css

* CSS and fonts for Source Code Pro and Source Sans Pro
* One of the themes (e.g. theme-light) or your own that implements the same CSS variables
* `main.css` from `notebook-preview`

Example setup:

```html
<!-- Optionally, use a conventional reset like normalize -->
<link rel="stylesheet" href="node_modules/normalize.css/normalize.css"/>
<!-- Optionally, include the fonts nteract uses -->
<link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700,300,200,500,600,900' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

<!-- Required: CodeMirror styling -->
<link rel="stylesheet" href="node_modules/codemirror/lib/codemirror.css"/>

<!-- Required: Style sheets for the notebook itself -->
<link rel="stylesheet" href="node_modules/notebook-preview/theme-light.css" />
<link rel="stylesheet" href="node_modules/notebook-preview/main.css" />
```

const includes = require('lodash.includes');

export function fetchFromGist(gistId) {
  var path = "https://api.github.com/gists/" + gistId;
  fetch(path)
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
}

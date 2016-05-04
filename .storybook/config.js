import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/notebook');
}

configure(loadStories, module);

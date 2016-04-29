import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Notebook from '../src';

import {
  dummyCommutable,
} from '../test/dummy-nb';

storiesOf('Notebook', module)
  .add('mmmm data', () => (
    <Notebook notebook={dummyCommutable} />
  ));

import React from 'react';

import { expect } from 'chai';

import { shallow } from 'enzyme';

import {
  dummyCommutable,
  dummyJSON,
} from '../dummy-nb';

import Notebook from '../../src/';

// Boilerplate test to make sure the testing setup is configured
describe('Notebook', () => {
  it('accepts an Immutable.Map notebook', () => {
    const component = shallow(
      <Notebook notebook={dummyCommutable} />
    );
    expect(component).to.not.be.null;
  });
  it('accepts a raw JSON notebook', () => {
    const component = shallow(
      <Notebook notebook={dummyJSON} />
    );
    expect(component).to.not.be.null;
  });
});

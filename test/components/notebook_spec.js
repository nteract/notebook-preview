import React from 'react';

import { expect } from 'chai';

import { shallow } from 'enzyme';

import Immutable from 'immutable';

import {
  dummyCommutable,
} from '../dummy-nb';

import Notebook from '../../src/';

// Boilerplate test to make sure the testing setup is configured
describe('Notebook', () => {
  it('accepts an Immutable.List of cells', () => {
    const component = shallow(
      <Notebook notebook={dummyCommutable} cellPagers={new Immutable.Map()} />
    );
    expect(component).to.not.be.null;
  });
});

import { expect } from 'chai';

import { fetchFromGist } from '../src/fetchers';

describe('fetchers', () => {
  describe('fetchFromGist', () => {
    it('fetching a valid gistId returns notebook JSON', () => {
      var gistId = "21ab98d355a7fc681883";
      fetchFromGist(gistId).then((nbJSON) => {
        expect(nbJSON).to.not.be.null;
      });
    });
  });
});

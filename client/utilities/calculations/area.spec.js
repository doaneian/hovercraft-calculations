var expect = require('chai').expect;
var area = require('./area');

describe('utilities', function() {
  describe('calculations', function() {
    it('should calculate area', function() {
      expect(area.calculateArea(5, 3)).to.equal(15);
    });
  });
});

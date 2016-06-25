var expect = require('chai').expect;
var force = require('./force');

describe('utilities', function() {
  describe('force conversions', function() {
    it('should convert lbs to Newtons', function() {
      expect(+Number(force.convertToStandardForce(10, 'lbs')).toFixed(2)).to.equal(44.4);
    });
  });
});

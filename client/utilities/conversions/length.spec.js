var expect = require('chai').expect;
var length = require('./length');

describe('utilities', function() {
  describe('length conversions', function() {
    it('should convert feet to meters', function() {
      expect(+Number(length.convertToStandardLength(5, 'ft')).toFixed(2)).to.equal(1.52);
    });
  });
});

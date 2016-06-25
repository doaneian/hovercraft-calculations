var expect = require('chai').expect;
var weight = require('./weight');

describe('utilities', function() {
  describe('weight conversions', function() {
    it('should convert pounds to kg', function() {
      expect(+Number(weight.convertToStandardWeight(300, 'lbs')).toFixed(2)).to.equal(136.2);
    });
  });
});

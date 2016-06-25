var expect = require('chai').expect;
var pressure = require('./pressure.conversion');

describe('utilities', function() {
  describe('pressure conversions', function() {
    it('should convert pascals to inches of water', function() {
      expect(+Number(pressure.convertPascalsToInchesWater(900)).toFixed(2)).to.equal(3.62);
    });
  });
});

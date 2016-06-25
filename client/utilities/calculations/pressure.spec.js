var expect = require('chai').expect;
var pressure = require('./pressure');

describe('utilities', function() {
  describe('pressure calculations', function() {
    it('should calculate pressure', function() {
      //136 kg, 1.4 m^2
      expect(+Number(pressure.calculatePressure(136, 1.4)).toFixed(2)).to.equal(952);
    });
  });
});

var expect = require('chai').expect;
var slope = require('./slope');

describe('utilities', function() {
  describe('force calculations', function() {
    it('should calculate force given a slope', function() {
      //2 degree slope, 300lb weight, unit of force - lbs
      expect(+Number(slope.calculateForceForSlope(2, 'degrees', 300, 'lbs', 'lbs')).toFixed(2)).to.equal(10.48);
    });

    it('should calculate slope given a force', function() {
      //10 lbs of thrust, 300 pound weight
      expect(+Number(slope.calculateSlopeForForce(10, 'lbs', 300, 'lbs', 'degrees')).toFixed(2)).to.equal(1.91);
    });
  });
});

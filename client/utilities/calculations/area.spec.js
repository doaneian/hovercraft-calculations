var expect = require('chai').expect;
var area = require('./area');

describe('utilities', function() {
  describe('area calculations', function() {
    it('should calculate area', function() {
      expect(area.calculateArea(5, 3)).to.equal(15);
    });

    it('should calculate nozzle area given thrust and velocity', function() {
      //44 Newtons of thrust, 38 m/s air velocity
      expect(+Number(area.calculateNozzleArea(44, 38)).toFixed(3)).to.equal(.025);
    });
  });
});

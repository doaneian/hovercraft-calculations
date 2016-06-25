var expect = require('chai').expect;
var velocity = require('./velocity');

describe('utilities', function() {
  describe('velocity calculations', function() {
    it('should calculate escape velocity given pressure', function() {
      //900 pascals
      expect(+Number(velocity.calculateVelocity(900)).toFixed(2)).to.equal(38.33);
    });
  });
});

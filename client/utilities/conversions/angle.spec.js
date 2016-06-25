var expect = require('chai').expect;
var angle = require('./angle');

describe('utilities', function() {
  describe('angle conversions', function() {
    it('should convert degrees to radians', function() {
      expect(+Number(angle.convertToRadians(2, 'degrees')).toFixed(2)).to.equal(.03);
    });
  });
});

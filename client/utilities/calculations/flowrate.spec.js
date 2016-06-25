var expect = require('chai').expect;
var flowrate = require('./flowrate');

describe('utilities', function() {
  describe('flowrate calculations', function() {
    it('should calculate flowrate', function() {
      //.025 m^2, 38 m/s
      expect(+Number(flowrate.calculateFlowRate(.025, 38)).toFixed(2)).to.equal(2012.94);
    });
  });
});

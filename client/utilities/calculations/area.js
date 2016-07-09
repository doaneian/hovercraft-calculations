var airDensity = require('../../config/app-constants').airDensity;

function calculateArea(length, width) {
  return Number(length) * Number(width);
}

// This function uses F=pV^2A.  Isolating for area, we get A = F / V^2p
function calculateNozzleArea(thrust, velocity) {
  return Number(thrust) / (Math.pow(Number(velocity), 2) * airDensity);
}

module.exports = {
  calculateArea,
  calculateNozzleArea
}

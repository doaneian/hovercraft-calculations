var airDensity = require('client/config/app-constants').airDensity;

function calculateArea(length, width) {
  return Number(length) * Number(width);
}

// Thrust is in Newtons, velocity is in m/s
function calculateNozzleArea(thrust, velocity) {
  return Number(thrust) / (Math.pow(Number(velocity), 2) * airDensity);
}

module.exports = {
  calculateArea,
  calculateNozzleArea
}

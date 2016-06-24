var airDensity = require('../../config/app-constants').airDensity;

function calculateArea(length, width) {
  return Number(length) * Number(width);
}

function calculateNozzleArea(thrust, velocity) {
  return Number(thrust) / (Math.pow(Number(velocity), 2) * airDensity);
}

module.exports = {
  calculateArea,
  calculateNozzleArea
}

var airDensity = require('../../config/app-constants').airDensity;

function calculateVelocity(pressure) {
  return Math.sqrt((2 * pressure) / airDensity);
}

module.exports = {
  calculateVelocity
}

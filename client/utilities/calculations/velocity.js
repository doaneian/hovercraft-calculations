var airDensity = require('../../config/app-constants').airDensity;

// Accepts pressure in Pascals, retrns velocity in m/s
function calculateVelocity(pressure) {
  return Math.sqrt((2 * pressure) / airDensity);
}

module.exports = {
  calculateVelocity
}

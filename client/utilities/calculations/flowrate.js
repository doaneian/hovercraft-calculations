var conversionFactors = require('../../config/app-constants').conversionFactors;

// Accepts area in m^2, velocity in m/s, and returns flowrate in CFM
function calculateFlowRate(area, velocity) {
  return (Number(area) * Number(velocity)) * conversionFactors.metersCubedPerSecondToCFM;
}

module.exports = {
  calculateFlowRate
};

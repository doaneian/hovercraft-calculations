var unitLabels = require('../../config/app-constants').units;
var conversionFactors = require('../../config/app-constants').conversionFactors;

function convertToStandardForce(force, units) {
  if (units === unitLabels.poundsForce) {
    return Number(force) * conversionFactors.poundsForceToNewtons;
  }
  if (units === unitLabels.newtons) {
    return Number(force);
  }
}

module.exports = {
  convertToStandardForce
}

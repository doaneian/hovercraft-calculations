var unitLabels = require('client/config/app-constants').units;
var conversionFactors = require('client/config/app-constants').conversionFactors;

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

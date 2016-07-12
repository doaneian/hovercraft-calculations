var unitLabels = require('client/config/app-constants').units;
var conversionFactors = require('client/config/app-constants').conversionFactors;

function convertToStandardLength(length, units) {
  if (units === unitLabels.feet) {
    return Number(length * conversionFactors.feetToMeters);
  }
  if (units === unitLabels.inches) {
    return Number(length * conversionFactors.inchesToMeters);
  }
  if (units === unitLabels.centimeters) {
    return Number(length * conversionFactors.centimetersToMeters);
  }
  if (units === unitLabels.meters) {
    return Number(length);
  }
}

module.exports = {
  convertToStandardLength
}

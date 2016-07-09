var unitLabels = require('../../config/app-constants').units;
var conversionFactors = require('../../config/app-constants').conversionFactors;

function convertToStandardWeight(weight, units) {
  if (units === unitLabels.pounds) {
    return Number(weight) * conversionFactors.poundsToKilograms;
  }
  if (units === unitLabels.ounces) {
    return Number(weight) * conversionFactors.ouncesToKilograms;
  }
  if (units === unitLabels.grams) {
    return Number(weight) * conversionFactors.gramsToKilograms;
  }
  if (units === unitLabels.kilograms) {
    return Number(weight);
  }
}

module.exports = {
  convertToStandardWeight
}

var unitLabels = require('../../config/app-constants').units;

function convertToStandardWeight(weight, units) {
  if (units === unitLabels.pounds) {
    return Number(weight) * .454;
  }
  if (units === unitLabels.ounces) {
    return Number(weight) * .0283;
  }
  if (units === unitLabels.grams) {
    return Number(weight) / 1000;
  }
  if (units === unitLabels.kilograms) {
    return Number(weight);
  }
}

module.exports = {
  convertToStandardWeight
}

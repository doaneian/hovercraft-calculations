var unitLabels = require('../../config/app-constants').units;

function convertToStandardLength(length, units) {
  if (units === unitLabels.feet) {
    return Number(length * .3048);
  }
  if (units === unitLabels.inches) {
    return Number(length * .0254);
  }
  if (units === unitLabels.centimeters) {
    return Number(length / 100);
  }
  if (units === unitLabels.meters) {
    return Number(length);
  }
}

module.exports = {
  convertToStandardLength
}

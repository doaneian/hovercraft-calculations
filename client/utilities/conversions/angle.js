var unitLabels = require('client/config/app-constants').units;
var conversionFactors = require('client/config/app-constants').conversionFactors;

function convertToRadians(angle, angleUnits) {
  if (angleUnits === unitLabels.degrees) {
    return Number(angle) * conversionFactors.degreesToRadians;
  }
  if (angleUnits === unitLabels.radians) {
    return Number(angle);
  }
}

module.exports = {
  convertToRadians
}

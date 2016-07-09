var unitLabels = require('../../config/app-constants').units;

function convertToRadians(angle, angleUnits) {
  if (angleUnits === unitLabels.degrees) {
    return Number(angle) * Math.PI / 180;
  }
  if (angleUnits === unitLabels.radians) {
    return Number(angle);
  }
}

module.exports = {
  convertToRadians
}

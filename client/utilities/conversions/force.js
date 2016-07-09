var unitLabels = require('../../config/app-constants').units;

function convertToStandardForce(force, units) {
  if (units === unitLabels.poundsForce) {
    return Number(force) * 4.44;
  }
  if (units === unitLabels.newtons) {
    return Number(force);
  }
}

module.exports = {
  convertToStandardForce
}

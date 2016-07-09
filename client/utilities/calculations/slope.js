var convertToStandardWeight = require('../conversions/weight').convertToStandardWeight;
var convertToRadians = require('../conversions/angle').convertToRadians;
var convertToStandardForce = require('../conversions/force').convertToStandardForce;
var conversionFactors = require('../../config/app-constants').conversionFactors;

function calculateForceForSlope(angle, units, weight, weightUnits, forceUnits) {
  var standardWeight = convertToStandardWeight(weight, weightUnits);
  var radians = convertToRadians(angle, units);
  const force = Math.sin(radians) * standardWeight * 9.8;

  if (forceUnits === 'lbs') {
    return force * conversionFactors.newtonsToPoundsForce;
  }

  return force;
}

function calculateSlopeForForce(thrust, units, weight, weightUnits, angleUnits) {
  var standardWeight = convertToStandardWeight(weight, weightUnits);
  var standardThrust = convertToStandardForce(thrust, units);
  const angle = Math.asin(standardThrust / (standardWeight * 9.8));

  if (angleUnits === 'degrees') {
    return angle * conversionFactors.radiansToDegrees;
  }

  return angle;
}

module.exports = {
  calculateForceForSlope,
  calculateSlopeForForce
}

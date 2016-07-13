export const saveInputs = function(width, widthUnits, length, lengthUnits,
  weight, weightUnits, desiredSlope, desiredSlopeUnits, desiredThrust,
  desiredThrustUnits) {
  return {
    type: 'SAVE_INPUTS',
    payload: {
      width: width,
      widthUnits: widthUnits,
      length: length,
      lengthUnits: lengthUnits,
      weight: weight,
      weightUnits: weightUnits,
      desiredSlope: desiredSlope,
      desiredSlopeUnits: desiredSlopeUnits,
      desiredThrust: desiredThrust,
      desiredThrustUnits: desiredThrustUnits
    }
  }
}

var units = require('client/config/app-constants').units;

export const calculationsInitialState = {
  inputs: {
    width: '',
    widthUnits: units.feet,
    length: '',
    lengthUnits: units.feet,
    weight: '',
    weightUnits: units.pounds,
    desiredSlope: '',
    desiredSlopeUnits: units.degrees,
    desiredThrust: '',
    desiredThrustUnits: units.poundsForce
  },
  inputsStandardUnits: {
    widthMeters: null,
    lengthMeters: null,
    weightKg: null,
    desiredSlopeRadians: null,
    desiredThrustN: null
  },
  calculationVariables: {
    area: null,
    pressure: null,
    velocity: null,
  },
  outputs: {
    nozzleArea: null,
    nozzleAreaUnits: null,
    blowerSpecs: {
      pressure: null,
      volume: null
    }
  }
};

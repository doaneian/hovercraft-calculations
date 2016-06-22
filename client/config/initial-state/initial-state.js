export const calculationsInitialState = {
  inputs: {
    width: null,
    widthUnits: null,
    length: null,
    lengthUnits: null,
    weight: null,
    weightUnits: null,
    desiredSlope: null,
    desiredSlopeUnits: null,
    desiredThrust: null,
    desiredThrustUnits: null
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

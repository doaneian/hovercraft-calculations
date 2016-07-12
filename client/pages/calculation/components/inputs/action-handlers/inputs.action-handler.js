import {fromJS} from 'immutable';
import {convertToStandardLength} from 'client/utilities/conversions/length';
import {convertToStandardWeight} from 'client/utilities/conversions/weight';
import {convertToRadians} from 'client/utilities/conversions/angle';
import {convertToStandardForce} from 'client/utilities/conversions/force';
import {convertPascalsToInchesWater} from 'client/utilities/conversions/pressure.conversion';
import {calculateArea, calculateNozzleArea} from 'client/utilities/calculations/area';
import {calculatePressure} from 'client/utilities/calculations/pressure';
import {calculateVelocity} from 'client/utilities/calculations/velocity';
import {calculateFlowRate} from 'client/utilities/calculations/flowrate';

export function saveInputs(state, action) {
  let newState = fromJS(state);

  // inputs
  newState = newState.updateIn(['inputs', 'width'], (v) => fromJS(action.payload.width));
  newState = newState.updateIn(['inputs', 'widthUnits'], (v) => fromJS(action.payload.widthUnits));
  newState = newState.updateIn(['inputs', 'length'], (v) => fromJS(action.payload.length));
  newState = newState.updateIn(['inputs', 'lengthUnits'], (v) => fromJS(action.payload.lengthUnits));
  newState = newState.updateIn(['inputs', 'weight'], (v) => fromJS(action.payload.weight));
  newState = newState.updateIn(['inputs', 'weightUnits'], (v) => fromJS(action.payload.weightUnits));
  newState = newState.updateIn(['inputs', 'desiredSlope'], (v) => fromJS(action.payload.desiredSlope));
  newState = newState.updateIn(['inputs', 'desiredSlopeUnits'], (v) => fromJS(action.payload.desiredSlopeUnits));
  newState = newState.updateIn(['inputs', 'desiredThrust'], (v) => fromJS(action.payload.desiredThrust));
  newState = newState.updateIn(['inputs', 'desiredThrustUnits'], (v) => fromJS(action.payload.desiredThrustUnits));

  // inputs standard units
  const standardWidth = convertToStandardLength(Number(action.payload.width), action.payload.widthUnits);
  newState = newState.updateIn(['inputsStandardUnits', 'widthMeters'], (v) => fromJS(standardWidth));

  const standardLength = convertToStandardLength(Number(action.payload.length), action.payload.lengthUnits);
  newState = newState.updateIn(['inputsStandardUnits', 'lengthMeters'], (v) => fromJS(standardLength));

  const standardWeight = convertToStandardWeight(action.payload.weight, action.payload.weightUnits);
  newState = newState.updateIn(['inputsStandardUnits', 'weightKg'], (v) => fromJS(standardWeight));

  newState = newState.updateIn(['inputsStandardUnits', 'desiredSlopeRadians'],
    (v) => fromJS(convertToRadians(action.payload.desiredSlope, action.payload.desiredSlopeUnits)));

  const standardThrust = convertToStandardForce(action.payload.desiredThrust, action.payload.desiredThrustUnits);
  newState = newState.updateIn(['inputsStandardUnits', 'desiredThrustN'], (v) => fromJS(standardThrust));

  // calculation variables
  const standardArea = calculateArea(standardWidth, standardLength);
  newState = newState.updateIn(['calculationVariables', 'area'], (v) => fromJS(standardArea));

  const standardPressure = calculatePressure(standardWeight, standardArea);
  newState = newState.updateIn(['calculationVariables', 'pressure'],
    (v) => fromJS(standardPressure));

  const standardVelocity = calculateVelocity(standardPressure);
  newState = newState.updateIn(['calculationVariables', 'velocity'],
    (v) => fromJS(standardVelocity));

  // outputs
  const nozzleArea = calculateNozzleArea(standardThrust, standardVelocity);
  newState = newState.updateIn(['outputs', 'nozzleArea'],
    (v) => fromJS(nozzleArea));

  newState = newState.updateIn(['outputs', 'blowerSpecs', 'pressure'],
    (v) => fromJS(convertPascalsToInchesWater(standardPressure)));
  newState = newState.updateIn(['outputs', 'blowerSpecs', 'volume'],
    (v) => fromJS(calculateFlowRate(nozzleArea, standardVelocity)));

  return newState;
}

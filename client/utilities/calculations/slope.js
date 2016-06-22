import {convertToStandardWeight} from '../conversions/weight';
import {convertToRadians} from '../conversions/angle';
import {convertToStandardForce} from '../conversions/force';

export function calculateForceForSlope(angle, units, weight, weightUnits, forceUnits) {
  let standardWeight = convertToStandardWeight(weight, weightUnits);
  let radians = convertToRadians(angle, units);
  const force = Math.sin(radians) * standardWeight * 9.8;

  if (forceUnits === 'lbs') {
    return force * .225;
  }

  return force;
}

export function calculateSlopeForForce(thrust, units, weight, weightUnits, angleUnits) {
  let standardWeight = convertToStandardWeight(weight, weightUnits);
  let standardThrust = convertToStandardForce(thrust, units);
  const angle = Math.asin(standardThrust / (standardWeight * 9.8));

  if (angleUnits === 'degrees') {
    return angle * 180 / Math.PI;
  }

  return angle;
}

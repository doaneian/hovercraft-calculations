import {airDensity} from '../../config/app-constants';

export function calculateArea(length, width) {
  return Number(length) * Number(width);
}

export function calculateNozzleArea(thrust, velocity) {
  return Number(thrust) / (Math.pow(Number(velocity), 2) * airDensity);
}

import {airDensity} from '../../config/app-constants';

export function calculateVelocity(pressure) {
  return Math.sqrt((2 * pressure) / airDensity);
}

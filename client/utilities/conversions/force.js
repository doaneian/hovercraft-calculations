export function convertToStandardForce(force, units) {
  if (units === 'lbs') {
    return Number(force) * 4.44;
  }
  if (units === 'N') {
    return Number(force);
  }
}

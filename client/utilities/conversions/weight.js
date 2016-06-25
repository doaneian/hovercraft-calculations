function convertToStandardWeight(weight, units) {
  if (units === 'lbs') {
    return Number(weight) * .454;
  }
  if (units === 'oz') {
    return Number(weight) * .0283;
  }
  if (units === 'g') {
    return Number(weight) / 1000;
  }
  if (units === 'kg') {
    return Number(weight);
  }
}

module.exports = {
  convertToStandardWeight
}

function convertToStandardLength(length, units) {
  if (units === 'ft') {
    return Number(length * .3048);
  }
  if (units === 'in') {
    return Number(length * .0254);
  }
  if (units === 'cm') {
    return Number(length / 100);
  }
  if (units === 'm') {
    return Number(length);
  }
}

module.exports = {
  convertToStandardLength
}

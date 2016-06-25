function convertToRadians(angle, angleUnits) {
  if (angleUnits === 'degrees') {
    return Number(angle) * Math.PI / 180;
  }
  if (angleUnits === 'radians') {
    return Number(angle);
  }
}

module.exports = {
  convertToRadians
}

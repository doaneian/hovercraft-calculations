// Accepts weight in kg, area in m^2, and returns pressure in Pascals
function calculatePressure(weight, area) {
  return (weight * 9.8) / area;
}

module.exports = {
  calculatePressure
}

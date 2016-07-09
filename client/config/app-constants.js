const airDensity = 1.225; // kg/m^3

const units = {
  pounds: 'lbs',
  ounces: 'oz',
  grams: 'g',
  kilograms: 'kg',
  degrees: 'degrees',
  radians: 'radians',
  poundsForce: 'lbs',
  newtons: 'N',
  feet: 'ft',
  inches: 'in',
  centimeters: 'cm',
  meters: 'm'
}

const conversionFactors = {
  degreesToRadians: Math.PI / 180,
  radiansToDegrees: 180 / Math.PI,
  poundsForceToNewtons: 4.44,
  newtonsToPoundsForce: .225,
  feetToMeters: .3048,
  inchesToMeters: .0254,
  centimetersToMeters: .01,
  pascalsToInchesWater: .00402,
  poundsToKilograms: .454,
  ouncesToKilograms: .0283,
  gramsToKilograms: .001,
  metersCubedPerSecondToCFM: 2118.88
}

module.exports = {
  airDensity,
  units,
  conversionFactors
}

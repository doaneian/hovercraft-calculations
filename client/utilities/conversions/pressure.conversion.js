var conversionFactors = require('../../config/app-constants').conversionFactors;

function convertPascalsToInchesWater(pressure) {
  return Number(pressure) * conversionFactors.pascalsToInchesWater;
}

module.exports = {
  convertPascalsToInchesWater
}

var conversionFactors = require('client/config/app-constants').conversionFactors;

function convertPascalsToInchesWater(pressure) {
  return Number(pressure) * conversionFactors.pascalsToInchesWater;
}

module.exports = {
  convertPascalsToInchesWater
}

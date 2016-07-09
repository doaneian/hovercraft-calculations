function calculateFlowRate(area, velocity) {
  // Flowrate = A*V, then multiply by 2188.88 to convert to CFM
  return (Number(area) * Number(velocity)) * 2118.88;
}

module.exports = {
  calculateFlowRate
};

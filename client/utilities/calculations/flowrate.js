function calculateFlowRate(area, velocity) {
  return (Number(area) * Number(velocity)) * 2118.88;
}

module.exports = {
  calculateFlowRate
};

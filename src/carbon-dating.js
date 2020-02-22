const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var first_order_reaction = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity != 'string' || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  if (isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  var age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / first_order_reaction);
  return age;
};

// const NP = require("number-precision");
const { plus, times: malt } = require("number-precision");

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => plus(acc, purchase), 0);

  total = malt(total, discount);
  return total;
}

// module.exports.calculateResultSum = calculateResultSum;
module.exports = { calculateResultSum };

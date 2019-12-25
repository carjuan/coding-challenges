/**
 * @param {string} J Jewels
 * @param {string} S stones
 * @returns {Number} Number of stones that are jewels
 */
var namJewelsInStones = function(J, S) {
  // initialize counter
  let counter = 0;

  // iterate over stones
  for (let i of S) {
    if (J.includes(i)) {
      counter++;
    }
  }
  return counter;
};

console.log(namJewelsInStones('aA', '"aAAbbbb"'), 3);
console.log(namJewelsInStones('z', '"ZZ"'), 0);

/**
 * @param {number[]} prices
 * @return {number} the maximum profit in array
 * @example
 *
 * [2,1,2,0,1] => 1
 * [2, 4, 1] => 2
 * [7,1,5,3,6,4] => 5
 * [7,6,4,3,1] => 0
 */

function maxProfit(prices) {
  let minPrice = Infinity;
  let bestProfit = 0;

  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      if (profit > bestProfit) {
        bestProfit = profit;
      }
    }
  });
  return bestProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//  loop: 0.506ms

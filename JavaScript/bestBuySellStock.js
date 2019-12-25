// maxProfit: TIME COMPLEXITY => O(n^2)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let bestProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i];
    const startSearch = i + 1;

    for (let sell = startSearch; sell < prices.length; sell++) {
      if (buy < prices[sell]) {
        const aProfit = prices[sell] - buy;
        if (aProfit > bestProfit) {
          bestProfit = aProfit;
        }
      }
    }
  }
  return bestProfit;
};

// maxProfit_two: TIME COMPLEXITY => O(n)

function maxProfit_two(stockPrices) {
  let minPrice = 99999;
  let bestProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const nextDayPrice = stockPrices[i + 1];

    if (currentPrice < nextDayPrice) {
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
        const profit = nextDayPrice - minPrice;

        if (profit > bestProfit) {
          bestProfit = profit;
        }
      } else {
        profit = nextDayPrice - minPrice;
        if (profit > bestProfit) {
          bestProfit = profit;
        }
      }
    }
  }
  return bestProfit;
}

// Refactoring
//maxProfit_three: TIME COMPLEXITY O(n)

function maxProfit_three(stockPrices) {
  let minPrice = 9999;
  let bestProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    if (currentPrice < minPrice) minPrice = currentPrice;
    const profit = currentPrice - minPrice;
    if (profit > bestProfit) bestProfit = profit;
  }
  return bestProfit;
}

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 0, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// [2,1,2,0,1] => 1
// [2, 4, 1] => 2
// [7,1,5,3,6,4] => 5
// [7,6,4,3,1] => 0

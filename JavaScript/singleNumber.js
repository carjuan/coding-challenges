/**
 * Finds single number in an array
 * @param {number[]} nums
 * @returns {number} Single number found in array
 */
function singleNumber(nums) {
  const setReducer = (set, num) => {
    set.has(num) ? set.delete(num) : set.add(num);
    return set;
  };

  let ans = nums
    .reduce(setReducer, new Set())
    /**
     * Reduce returns set object, calling values method to get
     * iterator over set
     */
    .values()
    // There must be only one value in set which is the single number
    .next().value;

  return ans;
}
console.log(singleNumber([4, 1, 2, 1, 2]));

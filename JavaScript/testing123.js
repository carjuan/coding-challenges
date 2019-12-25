/**
 *
 * @param {Array} array
 * @returns {Array} subarray with each line prepended by the correct number, returning the correct line numbers
 */
function number(array) {
  return array.reduce((array, letter, index) => {
    array.push(`${index + 1}: ${letter}`);
    return array;
  }, []);
}

console.log(number([]));

// console.log(number([]), [], 'Empty array should return empty array');
// console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

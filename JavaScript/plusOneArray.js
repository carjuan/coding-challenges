function upArray(arr) {
  // ...
  const isEmpty = !arr.length;
  const isSingleDigit = (num) => num > 9;
  const isSingleArray = (array) => array.some(isSingleDigit);
  const isNegative = (num) => num < 0;
  const isNegativeArray = (array) => array.some(isNegative);
  const plusOne = (array) => {
    const { length } = array;
    for (let i = length - 1; i >= 0; i--) {
      const number = array[i];
      if (number !== 9) {
        array[i]++;
        break;
      } else {
        array[i] = 0;
      }
      if (i === 0) {
        array.unshift(1);
      }
    }

    return array;
  };

  if (isEmpty || isSingleArray(arr) || isNegativeArray(arr)) {
    return null;
  }

  return plusOne(arr);
}

console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);

function iqTest(numbers) {
  const numArray = numbers.split(' ');
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 === 1;
  let evens = 0;
  let odds = 0;
  numArray.forEach((num) => {
    isEven(num) ? evens++ : odds++;
  });

  const diffNumber =
    evens > odds ? numArray.find(isOdd) : numArray.find(isEven);
  const result = numArray.indexOf(diffNumber) + 1;
  return result;
}

console.log(iqTest('2 4 7 8 10'), 3);
console.log(iqTest('1 2 2'), 1);

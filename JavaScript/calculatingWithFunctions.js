// For the following problem, extensive use of closures is required
/**
 * Write calculations using functions and get the results
 *
 * @example
 * seven(times(five())) => 35
 * four(plus(nine())) =>  13
 * eight(minus(three())) => 5
 * six(dividedBy(two())) => 3
 *
 */

// Generate functions for the right number
const funcNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
].forEach((funcName, n) => {
  // globalThis could be possibly changed for 'this' depending on env
  globalThis[funcName] = getNumber(n);
});

function getNumber(n) {
  return (op) => (op ? op(n) : n);
}

function plus(rightOperand) {
  return (leftOperand) => leftOperand + rightOperand;
}
function minus(rightOperand) {
  return (leftOperand) => leftOperand - rightOperand;
}
function times(rightOperand) {
  return (leftOperand) => leftOperand * rightOperand;
}
function dividedBy(rightOperand) {
  return (leftOperand) => Math.floor(leftOperand / rightOperand);
}

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(eight(dividedBy(three())), 2);

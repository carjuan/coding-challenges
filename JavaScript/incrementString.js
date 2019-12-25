/**
 *
 * @param {string} string
 * @returns {string} if numbers are appended to the string, returns that number + 1, if not numbers are appended to the string, returns string with 1 appended
 */
function incrementString_two(string) {
  // match any digits >= 0 at the end of string
  return string.replace(/\d*$/, match => {
    if (!match) return '1';

    const numString = String(parseInt(match) + 1);

    const zeros = match.length - numString.length;

    return zeros > 0 ? '0'.repeat(zeros) + numString : numString;
  });
}

// TESTS CASES
console.log(incrementString_two('foobar000'), 'foobar001');
console.log(incrementString_two('foo'), 'foo1');
console.log(incrementString_two('foobar001'), 'foobar002');
console.log(incrementString_two('fo0obar99'), 'f0obar100');
console.log(incrementString_two('foobar099'), 'foobar100');
console.log(incrementString_two('f11bar099'), 'f11bar100');
console.log(incrementString_two('f11b00a122a'), 'f11b00r122a1');
console.log(incrementString_two(''), '1');

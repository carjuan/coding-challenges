// Possible ways to solve the problem
// 1. Iterative process[X]
// 2. Using Numbers
// 3. Casting Numbers to Strings[X]
// 4. Recursion [X]

/**
 * Converting to a string implementation
 * @param {number} Number
 * @return {boolean} True if number reads the same backward as foward
 */
var isPalindrome = function(n) {
  const stringNumber = n.toString();
  // if n is negative => false
  if (stringNumber.length == 1) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    // split number into seperate elements in an array
    const eachNumber = [...stringNumber];

    const halve_length = Math.floor(eachNumber.length / 2);

    // initialize another pointer to compare with last characters of string
    const last_i = eachNumber.length - 1;

    for (let i = 0; i < halve_length; i++) {
      if (eachNumber[i] != eachNumber[last_i - i]) return false;
    }
    return true;
  }
};

// TEST CASES

console.log(isPalindrome(121), 'true');
console.log(isPalindrome(-121), 'false');
console.log(isPalindrome(1), 'true');

/**
 *Recursive implementation
 * @param {number} n
 * @returns {boolean} True is number is palindrome, false otherwise
 */
var isPalindrome_two = function(number) {
  const string = String(number);
  const length = string.length;
  if (length < 2) return true;
  return (
    string[0] === string[length - 1] && isPalindrome_two(string.slice(1, -1))
  );
};

console.log(isPalindrome_two(212), 'true');

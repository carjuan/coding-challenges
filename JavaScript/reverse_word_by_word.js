// TASK
// Given an input string, reverse the string word by word.
// Note that for spaces, there should only be one space after each word.
/**
 *
 * @param {string} aString The string to reverse
 * @returns {String} a reversed string word by word with only one space in between
 */
var reverseWords = function(aString) {
  let result = '';
  const reversed = aString
    .split(' ')
    .reverse()
    .forEach(word => (word ? (result += word + ' ') : word));

  return result.slice(0, -1);
};

// TEST CASE
console.log(
  reverseWords(' a good    example    for all'),
  'all for example good a'
);

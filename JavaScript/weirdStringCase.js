/**
 *
 * @param {string} string a lowercase string
 * @returns {string} a copy of the string with a weird case
 */
function toWeirdCase(string) {
  const words = string.split(' ');

  const weirdCase = words.map(word => {
    const letters = [...word].map((letter, i) =>
      i % 2 === 0 ? letter.toUpperCase() : letter
    );
    // join each letter without space
    return letters.join('');
  });
  // join each word with a space as a separator
  return weirdCase.join(' ');
}

console.log(toWeirdCase('String'), 'StRiNg');
console.log(toWeirdCase('Weird string case'), 'WeIrD StRiNg CaSe');
console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');

/**
 *
 * @param {string} town
 * @returns {Number} The number of rats that are deaf
 */
var countDeafRats = function(town) {
  // FACTS
  // piper has a position in the array
  // pattern should always be either "~O" or "O~"
  // there could be spaces between rats and piper

  const pattern = /O~|~O|P/g;
  const rats = town.match(pattern);
  const piperLocation = rats.indexOf('P');
  let deafRats = 0;
  rats.forEach((rat, i) => {
    if (i < piperLocation && rat === 'O~') deafRats++;
    if (i > piperLocation && rat === '~O') deafRats++;
  });

  return deafRats;
};

console.log(countDeafRats('~O~O~O~O P'), 0);
console.log(countDeafRats('P O~ O~ ~O O~'), 1);
console.log(countDeafRats('~O~O~O~O  O~P~O~OO~'), 2);

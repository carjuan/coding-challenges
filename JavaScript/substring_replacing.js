/**
 * @param {string} IPAddress (IPv4)
 * @returns {string} An IP address that replaces every period "." with "[.]"
 */
var defangIPaddr = function(address) {
  return [...address].map(ele => (ele === '.' ? '[.]' : ele)).join('');
};

console.log(defangIPaddr('1.1.1.1'), `1[.]1[.]1[.]1`);

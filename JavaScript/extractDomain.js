/**
 * Gets URL domain name
 * @param {String} url An URL string
 * @return {String} Domain name
 *
 */
function domainName(url) {
  // your code here

  const startsWithHTTP = url.startsWith('http');
  const startsWithWWW = url.startsWith('www');
  const domain = startsWithWWW || startsWithHTTP ? getDomain(url) : url;
  let dName = domain.substring(0, domain.indexOf('.'));
  return dName;
}

/**
 * Gets domain name without http or wwww prefixes
 * @param {String} url An url starting with either wwww or http
 * @return {String} domain name with not '.com'
 */
function getDomain(url) {
  if (url.startsWith('www')) {
    return removeWWW(url);
  }
  return removeHTTP(url);
}

/**
 * Removes any http/https prefixes and returns rest of the url
 * @param {String} url An http prefixed url
 * @return {String} Domain Name without prefixes
 */
function removeHTTP(url) {
  let domain = '';
  let isLastSlash = false;
  let slashCount = 0;
  let i = -1;
  while (!isLastSlash) {
    if (url[++i] === '/') {
      slashCount++;
    }
    if (slashCount === 2) {
      isLastSlash = true;
    }
  }
  domain = url.substring(++i);
  return domain.startsWith('www') ? removeWWW(domain) : domain;
}

/**
 * Removes 'www' prefixes of an url
 * @param {String} url A www prefixed url
 * @return {String} Domain Name without prefixed 'www'
 */
function removeWWW(url) {
  return url.substring(4);
}

/**
 * Retrieves domain name without either '.com/...', 'www' or http/https
 * @param {String} url
 * @return {String} domain name
 */
function domainNameV2(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://www.youtube.com'), 'youtube');

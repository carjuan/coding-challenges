function domainName(url) {
  // your code here

  const startsWithHTTP = url.startsWith('http');
  const startsWithWWW = url.startsWith('www');
  const domain = startsWithWWW || startsWithHTTP ? getDomain(url) : url;
  let dName = domain.substring(0, domain.indexOf('.'));

  return dName;
}

function getDomain(url) {
  if (url.startsWith('www')) {
    return removeWWW(url);
  }
  return removeHTTP(url);
}

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

function removeWWW(url) {
  return url.substring(4);
}

function domainName_V2(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://www.youtube.com'), 'youtube');

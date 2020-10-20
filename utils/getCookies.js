module.exports = (cookieHeader) => {
  if (!cookieHeader) return {};
  const rawCookies = cookieHeader.split(";");
  const parsedCookies = {};
  rawCookies.forEach((rawCookie) => {
    const parsedCookie = rawCookie.split("=");
    parsedCookies[parsedCookie[0].trim()] = parsedCookie[1];
  });
  return parsedCookies;
};

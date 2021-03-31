function logSite(req, res, next) {
  let date = new Date();
  console.log('Acessado em: ' + date);
  next();
}

module.exports = logSite;
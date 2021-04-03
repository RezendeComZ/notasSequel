// INACABADO

const cookieLogin = (req, res, next) => {
  if(req.cookies.logado != undefined && req.session.usuario == null) {
    let email = req.cookies.logado
    // ...
  }
  next();
}

module.exports = cookieLogin
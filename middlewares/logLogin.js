// Para importar e usar no futuro UsuariosController.js. Vai ficar tipo : index: ('/', logUsuario, index.UsuariosController)

function logUsuario(req, res, next) {
  let date = new Date();
  console.log('Usuário logado: ' + date);
  next();
}

module.exports = logUsuario;
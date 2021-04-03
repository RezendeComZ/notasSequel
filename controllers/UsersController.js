const { Usuario } = require('../models');
const bcrypt =  require('bcrypt')
const { check, validationResult, body } = require ('express-validator')

const UsersController = {
  // Login
  loginGet: (req, res) => {
    res.render('login')
  },
  loginPost:(req, res) => {
    let { email } = req.body
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    console.log('Requisição post: ' + email + ' senha: ' + req.body.password)
    console.log(validationResult(req))
    res.send('página de autenticacao')
    // res.redirect('notas')
  },
  // Criar
  registroGet(req, res) { // usando outro tipo de função só para variar
    res.send('Página de registro')
  }
}

module.exports = UsersController
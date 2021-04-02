const { Usuario } = require('../models');
const bcrypt =  require('bcrypt')
const { check, validationResult, body } = require ('express-validator')

const UsersController = {
  loginGet: (req, res) => {
    res.render('login')
  },
  loginPost:(req, res) => {
    let { email, password} = req.body
    console.log('Requisição post: ' + email + ' senha: ' + password)
    console.log(validationResult(req))
    res.redirect('notas')
  }
}

module.exports = UsersController
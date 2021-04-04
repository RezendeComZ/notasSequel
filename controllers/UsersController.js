const { Usuario } = require('../models');
const bcrypt =  require('bcrypt')
const { check, validationResult, body } = require ('express-validator')

const UsersController = {
  // Login
  loginGet: (req, res) => {
    res.render('login')
  },
  loginPost: async (req, res) => {
    let { email } = req.body // tinha também 'logado' de cookie, mas removi temporariamente
    const userDb = await Usuario.findOne({ where: { email }  })
    // console.log('dados do userdb: ' + userDb[0].email + ' pass da DB: ' + userDb[0].user_pass)
    // console.log('Express-validator: ', validationResult(req))
    let validade = false;
    if (userDb) {
      validade = bcrypt.compareSync(req.body.password, userDb.user_pass)
    }
    if (!validade) {
      return res.send('não passou')
    }
    // Recurso de Cookie inacabado, ver middleware tbm // está quebrando o login por hora
    // if(logado != undefined) {
    //   res.cookie('logado', userDb.email, {maxAge: 152800})
    // }
    req.session.usuario = userDb
    res.redirect('/notas')
  },
  // Logout:
  logout(req, res) {
    req.session.usuario = null
    res.send('Deslogado')
  },
  // Criar
  registroGet(req, res) { // usando outro tipo de função só para variar
    res.render('registro')
  },
  registroPost(req, res) {
    // Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {     
      return res.status(422).json({ errors: errors.array() });   
    }
    
    let { email, password, user_name } = req.body
    console.log('passou: ', email, password, user_name)
    // res.redirect('/notas')
  }
}

module.exports = UsersController
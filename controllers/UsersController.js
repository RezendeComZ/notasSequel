const { Usuario } = require('../models');
const bcrypt =  require('bcrypt')
const { check, validationResult, body } = require ('express-validator')

const UsersController = {
  // Login
  loginGet: (req, res) => {
    res.render('./login_registro/login')
  },
  loginPost: async (req, res) => {
    // Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {     
      return res.status(422).json({ errors: errors.array() });   
    }

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
    res.redirect('/')
  },
  // Logout:
  logout(req, res) {
    req.session.usuario = null
    res.redirect('/users/login')
  },
  // Criar
  registroGet(req, res) { // usando outro tipo de função só para variar
    res.render('./login_registro/registro')
  },
  registroPost: async (req, res) => {
    // Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {     
      return res.status(422).json({ errors: errors.array() });   
    }
    
    let { email, user_name } = req.body

    const userDb = await Usuario.findOne({ where: { email }  })

    console.log('situacao userDb: ', userDb)
    if (userDb) {
      return res.send('email já registrado')
    }

    const result = await Usuario.create({
            user_name,
            email,
            user_pass: await bcrypt.hash(req.body.password, 10)
    });
  
    res.send('conta criada')
    // res.redirect('/')
  }
}

module.exports = UsersController
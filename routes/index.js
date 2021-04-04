var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')
const UsersController = require('../controllers/UsersController')
const { check, validationResult, body } = require ('express-validator') // temp

/* Home / Redirecionamento */
router.get('/', (req, res) => {
  res.render('index')
});
/* Login */
router.get('/login', UsersController.loginGet);

router.post('/autenticar', 
  check("email").isEmail(),
  check("password").isLength({min: 6, max: 150})
, UsersController.loginPost)

/* Registro */
router.get('/registro', UsersController.registroGet)

/* Logout */
router.get('/logout', UsersController.logout);

/* Lista de notas */
router.get('/notas', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

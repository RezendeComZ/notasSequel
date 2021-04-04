var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/UsersController')
const { check, validationResult, body } = require ('express-validator')
console.log('passou pelo users.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Login */
router.get('/login', UsersController.loginGet);

router.post('/autenticar', 
  body("email").isEmail().bail(),
  body("password").isLength({min: 6, max: 150}).bail()
, UsersController.loginPost)

/* Registro */
router.get('/registro', UsersController.registroGet)

router.post('/registrando', 
  body("email").isEmail().bail(),
  body('user_name')
    .not()
    .isEmpty().withMessage('O campo de nome não pode estar vazio')
    .trim().escape()
    .isLength({min: 2, max: 40}).withMessage('Você precisa preencher ao menos 2 caracteres')
    .bail(),
  body("password").isLength({min: 6, max: 150}).bail()
, UsersController.registroPost)

/* Logout */
router.get('/logout', UsersController.logout);

module.exports = router;
 
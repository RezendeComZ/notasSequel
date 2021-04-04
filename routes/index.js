var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')
const UsersController = require('../controllers/UsersController')
const { check, validationResult, body } = require ('express-validator') // temp

/* Home / Notas */
router.get('/', NotasController.index);

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

/* Lista de notas */
router.get('/notas', (req, res) => {
  res.redirect('/')
});

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

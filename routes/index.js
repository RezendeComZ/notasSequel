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

router.post('/registrando', 
  body("email").isEmail().bail(),
  body('text')
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
router.get('/notas', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

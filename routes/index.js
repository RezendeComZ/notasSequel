var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')
const { check, validationResult, body } = require ('express-validator')

/* Home / Redirecionamento */
router.get('/', (req, res) => {
  res.render('index')
});
/* Login */
router.get('/login', (req, res) => {
  res.render('login')
});
router.post('/login', [
  check("email").isEmail(),
  check("password").isLength({min: 6, max: 150})
], (req, res) => {
  let { email, password} = req.body
  console.log('Requisição post: ' + email + ' senha: ' + password)
  console.log(validationResult(req))
  res.redirect('notas')
})

/* Lista de notas */
router.get('/notas', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

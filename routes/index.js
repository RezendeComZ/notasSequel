var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')

/* Home / Redirecionamento */
router.get('/', (req, res) => {
  res.render('index')
});
/* Login */
router.get('/login', (req, res) => {
  res.render('login')
});

/* Lista de notas */
router.get('/notas', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

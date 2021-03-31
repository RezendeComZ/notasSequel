var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')

/* Login / Redirecionamento */
router.get('/', (req, res) => {
  res.render('index')
});

/* Lista de notas */
router.get('/notas', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

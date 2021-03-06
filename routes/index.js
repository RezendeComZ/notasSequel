var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')

/* Home / Notas */
router.get('/', NotasController.index);

/* Lista de notas */
router.get('/notas', (req, res) => {
  res.redirect('/')
});

/* Post */
router.post('/', NotasController.post)

/* Update */
router.post('/update', NotasController.update)

/* Delete */
router.post('/delete', NotasController.delete)

// Desativado temporariamente até descobrir como não atrapalhar outros arquivos routes
// /* 404 */
// router.use(NotasController.notFound)

module.exports = router;

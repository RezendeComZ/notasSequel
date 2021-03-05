var express = require('express');
var router = express.Router();
const NotasController = require('../controllers/NotasController')

/* Lista de notas */
router.get('/', NotasController.index);

/* 404 */
router.use(NotasController.notFound)

module.exports = router;

const { Nota } = require('../models') // O index vai retonar cada atribudo, por isso desestruturar

const NotasController = {
  index: async (req, res) => {
    // Vai valer mesmo a partir daqui em breve:
    const todas = await Nota.findAll() // db.query('select * from notas;' , // 'select * from notas WHERE nota_id = :idNota'
    const fixos = await Nota.findAll({
      where: {
        pin: true
      }
    });
    const naoFixos = await Nota.findAll({
      where: {
        pin: false
      }
    });
    // console.log(naoFixos)
    res.render('index', { todas, fixos, naoFixos })
  },
  notFound: (req, res) => {
    res.status(404).render('404', { pagina: req.url})
  }
}

module.exports = NotasController;

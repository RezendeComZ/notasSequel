const { Nota, Usuario } = require('../models') // O index vai retonar cada atribudo, por isso desestruturar

const NotasController = {
  index: async (req, res) => {
    // const todas = await Nota.findAll({
    //   include: { // incluindo a FK
    //     model: Usuario,
    //     as: 'user',
    //     required: true
    //   }
    // }) // db.query('select * from notas;' , // 'select * from notas WHERE nota_id = :idNota'
    if (!req.session.usuario) {
      res.redirect('/login')
    }
    const fixos = await Nota.findAll({
      where: {
        pin: true,
        user_id: req.session.usuario.user_id
      }
    });
    const naoFixos = await Nota.findAll({
      where: {
        pin: false
      }
    });
    res.render('notas', { fixos, naoFixos })
  },
  notFound: (req, res) => {
    res.status(404).render('404', { pagina: req.url})
  }
}

module.exports = NotasController;

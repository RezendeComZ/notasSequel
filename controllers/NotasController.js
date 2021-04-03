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

    /*
    Isso aqui em baixo (if (!req.session.usuario)...) pode ser um middleware importado dentro desse controller, só não coloquei pq quero dar a opção de poder compartilhar algumas notas, mais para a frente vejo como pode ser isso.
     */
    if (!req.session.usuario) {
      return res.redirect('/login')
    }

    const fixos = await Nota.findAll({
      where: {
        pin: true,
        user_id: req.session.usuario.user_id
      }
    });
    const naoFixos = await Nota.findAll({
      where: {
        pin: false,
        user_id: req.session.usuario.user_id
      }
    });
    res.render('notas', { fixos, naoFixos })
  },
  notFound: (req, res) => {
    res.status(404).render('404', { pagina: req.url})
  }
}

module.exports = NotasController;

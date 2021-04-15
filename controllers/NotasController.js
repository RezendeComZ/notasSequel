const { Nota } = require('../models') // O index vai retonar cada atribudo, por isso desestruturar

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
      return res.redirect('/users/login')
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
  post: async (req, res) => {
    let {title, body, pin} = req.body
    const result = await Nota.create({
      title,
      body,
      pin,
      user_id: req.session.usuario.user_id
    });
    res.redirect('/')
  },
  update: async (req, res) => {
    let {title, body, pin, nota_id} = req.body
    const result = await Nota.update({
      title,
      body,
      pin,
      user_id: req.session.usuario.user_id
    }, {
      where: {
        nota_id: nota_id,
        user_id: req.session.usuario.user_id
      }
    });
    res.redirect('/')
  },
  delete: async (req, res) => {
    console.log('chegou no delete')
    let { id } = req.params
    const result = await Nota.destroy({
      where: {
        nota_id: id,
        // user_id: req.session.usuario.user_id
      }
    })
    res.redirect('/')
  },
  notFound: (req, res) => {
    res.status(404).render('404', { pagina: req.url})
  }
}

module.exports = NotasController;

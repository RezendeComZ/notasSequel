const Sequelize = require('sequelize');
const config = require('../config/database')

const NotasController = {
  index: async (req, res) => {
    const db = new Sequelize(config)
    // let idNota = 1
    const result = await db.query('select * from notas' , // 'select * from notas WHERE nota_id = :idNota'
    {
      // replacements:{
      //   idNota
      // },
      type: Sequelize.QueryTypes.SELECT}); 
    console.log(result);
    console.log(result.length);
    res.render('index', { result })
  },
  notFound: (req, res) => {
    res.status(404).render('404', { pagina: req.url})
  }
}

module.exports = NotasController;

module.exports = (sequelize, DataType) => {
  const Nota = sequelize.define('Nota', {
    nota_id: {
      type: DataType.INTERGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      alowNull: true,
    },
    body: {
      type: DataType.STRING,
    },
    pin: {
      type: DataType.BOOLEAN,
      defaultValue: false
    },

  }, {
    tableName: 'notas'
  })
}
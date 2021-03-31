module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('Usuario', { // Maiusculo pq é o nome do model
    user_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataType.STRING
    },
    email: {
      type: DataType.STRING
    },
    user_pass: {
      type: DataType.STRING
    },
    user_theme: {
      type: DataType.INTEGER,
      alowNull: true,
    }
  }, {
    tableName: 'users',
  })
  return Usuario
}
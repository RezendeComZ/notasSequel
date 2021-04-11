module.exports = (sequelize, DataType) => {
  const Nota = sequelize.define('Nota', { // Maiusculo pq é o nome do model
    nota_id: {
      type: DataType.INTEGER,
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
    user_id: {
      type: DataType.INTEGER,
    },
    categoria_id: {
      type: DataType.INTEGER,
      alowNull: true // null é Home
    },
      createdAt: {
      field: 'create_at',
      type: DataType.DATE,
     },
     edited_at: {
         field: 'edited_at',
         type: DataType.DATE,
     }
  }, {
    tableName: 'notas', // se não indicar ele vai buscar por "Notas", seguindo o nome do model e colocando um "S" no final
    timestamps: false
  })

  Nota.associate = (listaDeModelos) => {
    Nota.belongsTo(listaDeModelos.Usuario, {
      foreignKey: 'user_id',
      as: 'user'
    })
  }
  return Nota
}
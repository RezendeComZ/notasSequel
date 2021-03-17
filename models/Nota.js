module.exports = (sequelize, DataType) => {
  const Nota = sequelize.define('Nota', { // Maiusculo pq é o nome do model
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
         createdAt: {
         field: 'created_at',
         type: Sequelize.DATE,
     },
     updatedAt: {
         field: 'updated_at',
         type: Sequelize.DATE,
     }
  }, {
    tableName: 'notas', // se não indicar ele vai buscar por "Notas", seguindo o nome do model e colocando um "S" no final
    // timestamps: false
  })
}
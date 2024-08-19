const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Board = require('./Board'); // Certifique-se de que o caminho está correto

const List = sequelize.define('List', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  boardId: {
    type: DataTypes.INTEGER,
    references: {
      model: Board,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: true
});

// Relacionamento
List.belongsTo(Board, { foreignKey: 'boardId' });

module.exports = List;

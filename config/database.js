const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3' // Caminho para o arquivo SQLite
});

module.exports = sequelize;

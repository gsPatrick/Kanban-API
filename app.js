const express = require('express');
const app = express();
const port = 3000;

const sequelize = require('./config/database');
const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');

app.use(express.json());

app.use('/boards', boardRoutes);
app.use('/lists', listRoutes);
app.use('/cards', cardRoutes);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  // Sincronizar os modelos com o banco de dados
  await sequelize.sync({ force: true });
});

module.exports = app;

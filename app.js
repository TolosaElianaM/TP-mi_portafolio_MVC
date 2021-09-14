const express = require('express');
const app = express();
const main = require('./src/routes/main');
const PORT = 3000;

app.use(express.static('public'));

app.use('/', main);

app.listen(PORT, () => {
  console.log('Servidor funcionando en puerto '+PORT);
});
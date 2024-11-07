const express = require('express');
const app = express();
const port = process.env.PORT || 8096;

app.get('/', (req, res) => {
  res.send('Minha aplicação!!!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

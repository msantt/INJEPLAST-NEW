const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Ativa GZIP
app.use(compression());

// Serve os arquivos da pasta atual
app.use(express.static(path.join(__dirname), {
  maxAge: '1d' // Cache de 1 dia
}));

app.listen(3000, () => {
  console.log('Servidor rodando com GZIP em http://localhost:3000');
});
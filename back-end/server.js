const express = require('express');
const app = express();
const port = 3000;

// Rotas do seu aplicativo

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

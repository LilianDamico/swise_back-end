const express = require('express');
const tasksRoutes = require('./routes/tasks');

const app = express();

// Registrar as rotas de tarefas
app.use('/tasks', tasksRoutes);



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());


// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: 'seu_usuario',
  host: 'seu_host',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432, // porta padrão do PostgreSQL
});

// Rota para listar todas as tarefas do Kanban
app.get('/tasks', (req, res) => {
  pool.query('SELECT * FROM tasks', (err, result) => {
    if (err) {
      console.error('Erro ao buscar tarefas:', err);
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    } else {
      const tasks = result.rows;
      res.json({ tasks });
    }
  });
});


// Rota para criar uma nova tarefa no Kanban
app.post('/tasks', (req, res) => {
  const { title, description } = req.body; 

  const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
  const values = [title, description];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao criar tarefa:', err);
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    } else {
      const newTask = result.rows[0];
      res.json({ message: 'Tarefa criada com sucesso', task: newTask });
    }
  });
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body; 

  const query = 'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *';
  const values = [title, description, taskId];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error(`Erro ao atualizar a tarefa ${taskId}:`, err);
      res.status(500).json({ error: `Erro ao atualizar a tarefa ${taskId}` });
    } else {
      const updatedTask = result.rows[0];
      res.json({ message: `Tarefa ${taskId} atualizada com sucesso`, task: updatedTask });
    }
  });
});


// Rota para excluir uma tarefa do Kanban
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  const query = 'DELETE FROM tasks WHERE id = $1';
  const values = [taskId];

  pool.query(query, values, (err) => {
    if (err) {
      console.error(`Erro ao excluir a tarefa ${taskId}:`, err);
      res.status(500).json({ error: `Erro ao excluir a tarefa ${taskId}` });
    } else {
      res.json({ message: `Tarefa ${taskId} excluída com sucesso` });
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

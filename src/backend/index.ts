// src/index.ts
// Este é o ponto de entrada da aplicação. Inicializa o servidor Express, configura as rotas e realiza a conexão com o banco.

import express from 'express';
import userRoutes from './routes/userRoutes';
import { UserRepository } from './repositories/UserRepository';

const app = express();
const port = 3000;

// Middleware para parser JSON
app.use(express.json());

// Conectar ao banco de dados
const userRepository = new UserRepository();
userRepository.connect();

// Usar as rotas configuradas
app.use('/api', userRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

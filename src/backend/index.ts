// src/index.ts
// Este é o ponto de entrada da aplicação. Inicializa o servidor Express, configura as rotas e realiza a conexão com o banco.

import express from 'express';
import userRoutes from './routes/userRoutes';
import { UserRepository } from './repositories/userRepository';
import { Request, Response } from "express";
import { auth, ConfigParams } from "express-openid-connect";
import dotenv from "dotenv";

dotenv.config(); // Carrega variáveis de ambiente do .env

const app = express();

const config: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET
};

// Middleware do Auth0 para autenticação
app.use(auth(config));

// Middleware para parser JSON
app.use(express.json());

// Conectar ao banco de dados
const userRepository = new UserRepository();
userRepository.connect();

// Rota protegida para verificar se o usuário está autenticado
app.get("/", (req: any, res: any) => {
  if (!req.oidc || !req.oidc.isAuthenticated()) {
    return res.send("Logged out");
  }
  res.send("Logged in");
});

// Usar as rotas configuradas
app.use('/api', userRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// src/routes/userRoutes.ts
// Responsável por configurar as rotas de acesso à API.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();

const router = Router();

// Definir os endpoints
router.get('/users', userController.getAllUsers.bind(userController)); // Obter todos os usuários
router.post('/users', userController.createUser.bind(userController)); // Criar um novo usuário

export default router;

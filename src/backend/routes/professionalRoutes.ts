// src/routes/professionalRoutes.ts
// Responsável por configurar as rotas relacionadas aos profissionais.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from 'express';
import { ProfessionalController } from '../controllers/ProfessionalController';

const professionalController = new ProfessionalController();

const router = Router();

// Definir os endpoints
router.post('/professionals', professionalController.createProfessional.bind(professionalController)); // Criar um profissional
router.put('/professionals/:id', professionalController.editProfessional.bind(professionalController)); // Editar um profissional

export default router;

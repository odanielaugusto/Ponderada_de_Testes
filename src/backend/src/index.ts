import express from "express";
import dotenv from "dotenv";
import db from './config/db.js';  
import pg from 'pg';
const { Pool } = pg;


// Rotas:
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import professionalRoutes from "./routes/professionalRoutes.js";

dotenv.config();

const app = express();  
app.use(express.json());

// Usar as rotas configuradas
app.use("/api/user/", userRoutes);
app.use("/api/appointment/", appointmentRoutes);
app.use("/api/dashboard/", dashboardRoutes);
app.use("/api/professional/", professionalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Teste do Banco de Dados
const testDatabaseConnection = async () => {
  const client = await db.connect();  // Conectando ao banco usando o pool configurado
  try {
    // Executa uma consulta simples para testar a conexão
    const result = await client.query('SELECT NOW()');
    
    // Se a consulta for bem-sucedida, exibe o resultado
    console.log('Conexão bem-sucedida! Data e hora atual do banco:', result.rows[0].now);
  } catch (error) {
    console.error('Erro ao testar a conexão com o banco:', error);
  } finally {
   
    client.release();
  }
};

testDatabaseConnection(); 

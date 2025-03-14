import express from "express";
import dotenv from "dotenv";

// Rotas:
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import professionalRoutes from "./routes/professionalRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { auth, ConfigParams } from "express-openid-connect"; // Importação necessária para o funcionamento do Auth0

dotenv.config();

const app = express();  
app.use(express.json());

// Configurações para a autenticação de login com o Auth0
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

// Usar as rotas configuradas
app.use("/", authRoutes); 
app.use("/api/user/", userRoutes);
app.use("/api/appointment/", appointmentRoutes);
app.use("/api/dashboard/", dashboardRoutes);
app.use("/api/professional/", professionalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

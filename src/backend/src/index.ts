import express from "express";
import dotenv from "dotenv";

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

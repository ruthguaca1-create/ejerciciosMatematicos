import express from "express";
import fisicaRoutes from "./routes/fisica.routes.js";
import matematicasRoutes from "./routes/matematicas.routes.js";
import cors from "cors";

const app = express();
const port = 3000;

// Permite recibir datos en formato JSON
app.use(express.json());
app.use(cors());

// Todas las rutas de física comienzan con /fisica
app.use("/fisica", fisicaRoutes);
// Todas las rutas de matematicas comienzan con /matematicas
app.use("/matematicas", matematicasRoutes);
// Ruta principal
app.get("/", (req, res) => {
    res.send("servidor funcional");
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
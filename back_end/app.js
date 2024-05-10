import express from "express";
import "dotenv/config";
import cors from "cors";
import groupRouter from "./src/routers/groups.routers.js";

const app = express();


app.use(express.json());
app.use(cors());

//Es necesario configurar las rutas para que la app las pueda leer y utilizar
app.use('/groups', groupRouter());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`); // levanta el servidor en el puerto deseado
});
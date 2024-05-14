import "dotenv/config";
import express from "express";
import cors from "cors";
import mainRouter from "./routers/async.router.js";

const app = express();
const PORT = process.env.PORT||3000;


app.use(express.json());
app.use(cors());
app.use (mainRouter());

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`); // levanta el servidor en el puerto deseado
});
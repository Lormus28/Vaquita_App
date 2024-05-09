import express from "express";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`); // levanta el servidor en el puerto deseado
});
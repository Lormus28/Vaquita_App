import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`); // levanta el servidor en el puerto deseado
});
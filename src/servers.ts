import express from "express";
import "./database/Connections";
import routes from "./controllers/routes";

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => console.log(`Servidor na porta: ${3000}`))
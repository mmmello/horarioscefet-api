import express from "express";
import "./database/Connections";
import cors from "cors";
import routes from "./controllers/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", routes);
app.listen(3000);
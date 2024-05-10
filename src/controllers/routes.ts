import express, { Router } from "express";
import grade from "./Grade";
import professor from "./Professor";
import usuario from "./Usuario";
import sala from "./Sala";
import disciplina from "./Disciplina";
import noticia from "./Noticia";

const routes: Router = express.Router();

routes.use("/", grade);
routes.use("/", professor);
routes.use("/", usuario);
routes.use("/", sala);
routes.use("/", disciplina);
routes.use("/", noticia);

export default routes;
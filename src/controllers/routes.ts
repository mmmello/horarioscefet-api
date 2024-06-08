import express, { Router } from "express";
import grade from "./Grade";
import professor from "./Professor";
import usuario from "./Usuario";
import sala from "./Sala";
import disciplina from "./Disciplina";
import noticia from "./Noticia";
import pauta from "./Pauta";
import ementa from "./Ementa";
import aula from "./Aula";
import area from "./Area";
import areaDisciplinar from "./AreaDisciplinar";
import pautaNoticia from "./PautaNoticia";

const routes: Router = express.Router();

routes.use("/", grade);
routes.use("/", professor);
routes.use("/", usuario);
routes.use("/", sala);
routes.use("/", disciplina);
routes.use("/", noticia);
routes.use("/", pauta);
routes.use("/", ementa);
routes.use("/", aula);
routes.use("/", area);
routes.use("/", areaDisciplinar);
routes.use("/", pautaNoticia);

export default routes;
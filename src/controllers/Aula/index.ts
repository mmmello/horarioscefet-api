import express, { Router } from "express";
import {criarAula, deletarAula, editarAula, listarAulas} from "./aulaController";

const aula: Router = express.Router();

aula.post('/aula', criarAula);
aula.get('/aula', listarAulas);
aula.put('/aula', editarAula);
aula.delete('/aula', deletarAula);
export default aula;
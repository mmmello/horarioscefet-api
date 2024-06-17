import express, { Router } from "express";
import {criarAula, deletarAula, editarAula, listarAulas} from "./aulaController";
import authMiddleware from "../../middlewares/authMiddleware";

const aula: Router = express.Router();

aula.post('/aula', authMiddleware, criarAula);
aula.get('/aula', listarAulas);
aula.put('/aula', authMiddleware, editarAula);
aula.delete('/aula', authMiddleware, deletarAula);
export default aula;
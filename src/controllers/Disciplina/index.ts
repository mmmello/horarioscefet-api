import express, { Router } from "express";
import {criarDisciplina, deletarDisciplina, editarDisciplina, listarDisciplinas} from "./disciplinaController";
import authMiddleware from "../../middlewares/authMiddleware";

const disciplina: Router = express.Router();

disciplina.post('/disciplina', authMiddleware, criarDisciplina);
disciplina.get('/disciplina', authMiddleware, listarDisciplinas);
disciplina.put('/disciplina', authMiddleware, editarDisciplina);
disciplina.delete('/disciplina', authMiddleware, deletarDisciplina);
export default disciplina;
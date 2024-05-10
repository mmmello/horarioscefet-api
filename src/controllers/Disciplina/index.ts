import express, { Router } from "express";
import {criarDisciplina, deletarDisciplina, editarDisciplina, listarDisciplinas} from "./disciplinaController";

const disciplina: Router = express.Router();

disciplina.post('/disciplina', criarDisciplina);
disciplina.get('/disciplina', listarDisciplinas);
disciplina.put('/disciplina', editarDisciplina);
disciplina.delete('/disciplina', deletarDisciplina);
export default disciplina;
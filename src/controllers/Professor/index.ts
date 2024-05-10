import express, { Router } from "express";
import {criarProfessor, deletarProfessor, editarProfessor, listarProfessores} from "./professorController";

const professor: Router = express.Router();

professor.post('/professor', criarProfessor);
professor.get('/professor', listarProfessores);
professor.put('/professor', editarProfessor);
professor.delete('/professor', deletarProfessor);
export default professor;
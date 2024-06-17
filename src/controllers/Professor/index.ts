import express, { Router } from "express";
import {criarProfessor, deletarProfessor, editarProfessor, listarProfessores} from "./professorController";
import authMiddleware from "../../middlewares/authMiddleware";

const professor: Router = express.Router();

professor.post('/professor', authMiddleware, criarProfessor);
professor.get('/professor', authMiddleware, listarProfessores);
professor.put('/professor', authMiddleware, editarProfessor);
professor.delete('/professor', authMiddleware, deletarProfessor);
export default professor;
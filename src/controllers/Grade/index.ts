import express, { Router } from "express";
import {criarGrade, deletarGrade, editarGrade, listarGrades} from "./gradeController";
import authMiddleware from "../../middlewares/authMiddleware";

const grade: Router = express.Router();

grade.post('/grade', authMiddleware, criarGrade);
grade.get('/grade', authMiddleware, listarGrades);
grade.put('/grade', authMiddleware, editarGrade);
grade.delete('/grade', authMiddleware, deletarGrade);
export default grade;
import express, { Router } from "express";
import {criarGrade, deletarGrade, editarGrade, listarGrades} from "./gradeController";

const grade: Router = express.Router();

grade.post('/grade', criarGrade);
grade.get('/grade', listarGrades);
grade.put('/grade', editarGrade);
grade.delete('/grade', deletarGrade);
export default grade;
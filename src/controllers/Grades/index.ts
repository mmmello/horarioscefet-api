import express, { Router } from "express";
import {criarGrade, deletarGrade, editarGrade, listarGrades} from "./gradeController";

const grades: Router = express.Router();

grades.post('/grade', criarGrade);
grades.get('/grade', listarGrades);
grades.put('/grade', editarGrade);
grades.delete('/grade', deletarGrade);
export default grades;
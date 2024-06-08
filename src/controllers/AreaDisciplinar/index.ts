import express, { Router } from "express";
import {vincularDisciplina, desvincularDisciplina} from "./areaDisciplinarController";

const areaDisciplinar: Router = express.Router();

areaDisciplinar.post('/areaDisciplinar', vincularDisciplina);
areaDisciplinar.delete('/areaDisciplinar', desvincularDisciplina);
export default areaDisciplinar;
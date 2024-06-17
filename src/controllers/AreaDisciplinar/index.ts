import express, { Router } from "express";
import {vincularDisciplina, desvincularDisciplina} from "./areaDisciplinarController";
import authMiddleware from "../../middlewares/authMiddleware";

const areaDisciplinar: Router = express.Router();

areaDisciplinar.post('/areaDisciplinar', authMiddleware, vincularDisciplina);
areaDisciplinar.delete('/areaDisciplinar', authMiddleware, desvincularDisciplina);
export default areaDisciplinar;
import express, { Router } from "express";
import {criarArea, deletarArea, editarArea, listarAreas} from "./areaController";
import authMiddleware from "../../middlewares/authMiddleware";

const area: Router = express.Router();

area.post('/area', authMiddleware, criarArea);
area.get('/area', authMiddleware, listarAreas);
area.put('/area', authMiddleware, editarArea);
area.delete('/area', authMiddleware, deletarArea);
export default area;
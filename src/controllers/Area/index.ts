import express, { Router } from "express";
import {criarArea, deletarArea, editarArea, listarAreas} from "./areaController";

const area: Router = express.Router();

area.post('/area', criarArea);
area.get('/area', listarAreas);
area.put('/area', editarArea);
area.delete('/area', deletarArea);
export default area;
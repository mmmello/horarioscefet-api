import express, { Router } from "express";
import {criarPauta, deletarPauta, editarPauta, listarPautas} from "./pautaController";
import authMiddleware from "../../middlewares/authMiddleware";

const pauta: Router = express.Router();

pauta.post('/pauta', authMiddleware, criarPauta);
pauta.get('/pauta', authMiddleware, listarPautas);
pauta.put('/pauta', authMiddleware, editarPauta);
pauta.delete('/pauta', authMiddleware, deletarPauta);
export default pauta;
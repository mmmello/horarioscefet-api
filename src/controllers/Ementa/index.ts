import express, { Router } from "express";
import {criarEmenta, deletarEmenta, editarEmenta, listarEmentas} from "./ementaController";
import authMiddleware from "../../middlewares/authMiddleware";

const ementa: Router = express.Router();

ementa.post('/ementa', authMiddleware, criarEmenta);
ementa.get('/listarEmentas', authMiddleware, listarEmentas);
//ementa.get('/ementaAtual', buscarEmentaAtual);
ementa.put('/ementa', authMiddleware, editarEmenta);
ementa.delete('/ementa', authMiddleware, deletarEmenta);
export default ementa;
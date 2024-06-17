import express, { Router } from "express";
import {criarSala, deletarSala, editarSala, listarSalas} from "./salaController";
import authMiddleware from "../../middlewares/authMiddleware";

const sala: Router = express.Router();

sala.post('/sala', authMiddleware, criarSala);
sala.get('/sala', authMiddleware, listarSalas);
sala.put('/sala', authMiddleware, editarSala);
sala.delete('/sala', authMiddleware, deletarSala);
export default sala;
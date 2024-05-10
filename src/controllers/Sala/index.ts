import express, { Router } from "express";
import {criarSala, deletarSala, editarSala, listarSalas} from "./salaController";

const sala: Router = express.Router();

sala.post('/sala', criarSala);
sala.get('/sala', listarSalas);
sala.put('/sala', editarSala);
sala.delete('/sala', deletarSala);
export default sala;
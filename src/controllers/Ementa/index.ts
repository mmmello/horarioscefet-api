import express, { Router } from "express";
import {criarEmenta, deletarEmenta, editarEmenta, listarEmentas} from "./ementaController";

const ementa: Router = express.Router();

ementa.post('/ementa', criarEmenta);
ementa.get('/listarEmentas', listarEmentas);
//ementa.get('/ementaAtual', buscarEmentaAtual);
ementa.put('/ementa', editarEmenta);
ementa.delete('/ementa', deletarEmenta);
export default ementa;
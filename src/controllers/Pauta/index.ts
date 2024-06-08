import express, { Router } from "express";
import {criarPauta, deletarPauta, editarPauta, listarPautas} from "./pautaController";

const pauta: Router = express.Router();

pauta.post('/pauta', criarPauta);
pauta.get('/pauta', listarPautas);
pauta.put('/pauta', editarPauta);
pauta.delete('/pauta', deletarPauta);
export default pauta;
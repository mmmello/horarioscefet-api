import express, { Router } from "express";
import {vincularNoticia, desvincularNoticia} from "./pautaNoticiaController";

const pautaNoticia: Router = express.Router();

pautaNoticia.post('/pautaNoticia', vincularNoticia);
pautaNoticia.delete('/pautaNoticia', desvincularNoticia);
export default pautaNoticia;
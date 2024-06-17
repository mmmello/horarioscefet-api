import express, { Router } from "express";
import {vincularNoticia, desvincularNoticia} from "./pautaNoticiaController";
import authMiddleware from "../../middlewares/authMiddleware";

const pautaNoticia: Router = express.Router();

pautaNoticia.post('/pautaNoticia', authMiddleware, vincularNoticia);
pautaNoticia.delete('/pautaNoticia', authMiddleware, desvincularNoticia);
export default pautaNoticia;
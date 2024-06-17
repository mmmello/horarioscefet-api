import express, { Router } from "express";
import {criarNoticia, deletarNoticia, editarNoticia, listarNoticias} from "./noticiaController";
import authMiddleware from "../../middlewares/authMiddleware";

const noticia: Router = express.Router();

noticia.post('/noticia', authMiddleware, criarNoticia);
noticia.get('/noticia', authMiddleware, listarNoticias);
noticia.put('/noticia', authMiddleware, editarNoticia);
noticia.delete('/noticia', authMiddleware, deletarNoticia);
export default noticia;
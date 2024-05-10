import express, { Router } from "express";
import {criarNoticia, deletarNoticia, editarNoticia, listarNoticias} from "./noticiaController";

const noticia: Router = express.Router();

noticia.post('/noticia', criarNoticia);
noticia.get('/noticia', listarNoticias);
noticia.put('/noticia', editarNoticia);
noticia.delete('/noticia', deletarNoticia);
export default noticia;
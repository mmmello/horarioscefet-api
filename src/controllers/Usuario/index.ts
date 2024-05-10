import express, { Router } from "express";
import {criarUsuario, deletarUsuario, editarUsuario, listarUsuarios} from "./usuarioController";

const usuario: Router = express.Router();

usuario.post('/usuario', criarUsuario);
usuario.get('/usuario', listarUsuarios);
usuario.put('/usuario', editarUsuario);
usuario.delete('/usuario', deletarUsuario);
export default usuario;
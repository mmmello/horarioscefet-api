import express, { Router } from "express";
import {criarUsuario, deletarUsuario, editarUsuario, listarUsuarios, login} from "./usuarioController";
import authMiddleware from "../../middlewares/authMiddleware";


const usuario: Router = express.Router();

usuario.post('/usuario', criarUsuario);
usuario.get('/usuario', listarUsuarios);
usuario.put('/usuario', authMiddleware, editarUsuario);
usuario.delete('/usuario', deletarUsuario);
usuario.post('/login', login);
export default usuario;
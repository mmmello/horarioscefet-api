import express, { Router } from "express";
import {criarUsuario, deletarUsuario, editarUsuario, listarUsuarios, login} from "./usuarioController";
import authMiddleware from "../../middlewares/authMiddleware";


const usuario: Router = express.Router();

usuario.post('/usuario', authMiddleware, criarUsuario);
usuario.get('/usuario', authMiddleware, listarUsuarios);
usuario.put('/usuario', authMiddleware, editarUsuario);
usuario.delete('/usuario', authMiddleware, deletarUsuario);
usuario.post('/login', login);
export default usuario;
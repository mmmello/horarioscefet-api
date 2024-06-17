import {Request, Response, NextFunction} from "express";
import UsuarioRepository from "../../repositories/usuarioRepository";

import jwt      from 'jsonwebtoken';
import bcrypt   from 'bcryptjs';
import dotenv   from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : '0' ;

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new UsuarioRepository();
    const {email, senha} = req.body;

    const usuario = await repository.findByEmail(email);
    if (!usuario) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    /*const isMatch = await bcrypt.compare(senha, usuario.senha);
    if (!isMatch) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
    }*/

    const token = jwt.sign({ userId: usuario.id_usuario }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
}

export const criarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new UsuarioRepository();
    const {nome, email, senha} = req.body;

    await repository.insert({nome, email, senha});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarUsuarios = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new UsuarioRepository();
    let usuarios = await repository.selectAll();

    res.status(200).json(usuarios);
};

export const editarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new UsuarioRepository();
    const {nome, email, senha} = req.body;

    const id_usuario = Number(req.query.id);

    const find = await repository.find(id_usuario);

    try{
        if(find){
            await repository.update(id_usuario, {nome: nome, email: email, senha: senha});

            const usuario = await repository.selectOne(id_usuario);
            res.status(200).json({message: "Usuario editado com sucesso!", usuario: usuario});
        }else{
            res.status(404).json({id_usuario: `${id_usuario}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new UsuarioRepository();
    const id_usuario = Number(req.query.id);
    
    const find = await repository.find(id_usuario);

    try{
        if(find){
            await repository.destroy(id_usuario);
            const usuario = await repository.selectOne(id_usuario);

            if(!usuario)
                res.status(200).json({message: "Usuario deletado com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o usuario!"});

        }else{
            res.status(404).send({message: `Id: ${id_usuario} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
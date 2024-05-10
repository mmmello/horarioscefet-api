import {Request, Response, NextFunction} from "express";
import UsuarioRepository from "../../repositories/usuarioRepository";

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
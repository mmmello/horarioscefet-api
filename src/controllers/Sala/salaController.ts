import {Request, Response, NextFunction} from "express";
import SalaRepository from "../../repositories/salaRepository";

export const criarSala = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new SalaRepository();
    const {sala, pavilhao, andar, acessivel} = req.body;

    await repository.insert({sala, pavilhao, andar, acessivel});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarSalas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new SalaRepository();
    let usuarios = await repository.selectAll();

    res.status(200).json(usuarios);
};

export const editarSala = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new SalaRepository();
    const {sala, pavilhao, andar, acessivel} = req.body;

    const id_sala = Number(req.query.id);

    const find = await repository.find(id_sala);

    try{
        if(find){
            await repository.update(id_sala, {sala: sala, pavilhao: pavilhao, andar: andar, acessivel: acessivel});

            const oSala = await repository.selectOne(id_sala);
            res.status(200).json({message: "Sala editada com sucesso!", sala: oSala});
        }else{
            res.status(404).json({id_sala: `${id_sala}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarSala = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new SalaRepository();
    const id_sala = Number(req.query.id);
    
    const find = await repository.find(id_sala);

    try{
        if(find){
            await repository.destroy(id_sala);
            const sala = await repository.selectOne(id_sala);

            if(!sala)
                res.status(200).json({message: "Sala deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar a sala!"});

        }else{
            res.status(404).send({message: `Id: ${id_sala} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
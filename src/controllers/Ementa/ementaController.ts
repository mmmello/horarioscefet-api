import {Request, Response, NextFunction} from "express";
import EmentaRepository from "../../repositories/ementaRepository";
import DisciplinaRepository from "../../repositories/disciplinaRepository";

export const criarEmenta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    const repository_disciplina = new DisciplinaRepository();
    const {descricao, id_disciplina} = req.body;

    const disciplina = await repository_disciplina.find(id_disciplina);

    if (disciplina){
        await repository.insert({descricao, id_disciplina});
        res.status(200).send("Dados inseridos com sucesso!");
    }else
        res.status(404).json({id_disciplina: `${id_disciplina}`, message: "Disciplina não encontrada!"});
};

export const listarEmentas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    let ementas = await repository.selectAll();

    res.status(200).json(ementas);
};

/*export const buscarEmentaAtual = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    const id_disciplina = Number(req.query.id_disciplina);

    if(id_disciplina != undefined){
        let ementa = await repository.selectLast(id_disciplina);
        res.status(200).json(ementa);
    }else{
        res.status(400).json({message: "Informar o ID da disciplina!"});
    }
};*/

export const editarEmenta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    const repository_disciplina = new DisciplinaRepository();
    const {descricao, id_disciplina} = req.body;

    const disciplina = await repository_disciplina.find(id_disciplina);

    if (disciplina){
        await repository.insert({descricao, id_disciplina});
        res.status(200).send("Ementa atualizada com sucesso!");
    }else
        res.status(404).json({id_disciplina: `${id_disciplina}`, message: "Disciplina não encontrada!"});
};

/*export const editarEmenta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    const {descricao, id_disciplina} = req.body;

    const id_ementa = Number(req.query.id);

    const find = await repository.find(id_ementa);

    try{
        if(find){
            await repository.update(id_ementa, {descricao: descricao, id_disciplina: id_disciplina});

            const ementa = await repository.selectOne(id_ementa);
            res.status(200).json({message: "Ementa editada com sucesso!", ementa: ementa});
        }else{
            res.status(404).json({id_ementa: `${id_ementa}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};*/

export const deletarEmenta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new EmentaRepository();
    const id_ementa = Number(req.query.id);
    
    const find = await repository.find(id_ementa);

    try{
        if(find){
            await repository.destroy(id_ementa);
            const ementa = await repository.selectOne(id_ementa);

            if(!ementa)
                res.status(200).json({message: "Ementa deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o ementa!"});

        }else{
            res.status(404).send({message: `Id: ${id_ementa} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
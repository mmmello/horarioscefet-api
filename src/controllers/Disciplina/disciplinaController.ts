import {Request, Response, NextFunction} from "express";
import DisciplinaRepository from "../../repositories/disciplinaRepository";

export const criarDisciplina = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new DisciplinaRepository();
    const {nome, carga_horaria, credito} = req.body;

    await repository.insert({nome, carga_horaria, credito});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarDisciplinas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new DisciplinaRepository();
    let disciplinas = await repository.selectAll();

    res.status(200).json(disciplinas);
};

export const editarDisciplina = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new DisciplinaRepository();
    const {nome, carga_horaria, credito} = req.body;

    const id_disciplina = Number(req.query.id);

    const find = await repository.find(id_disciplina);

    try{
        if(find){
            await repository.update(id_disciplina, {nome: nome, carga_horaria: carga_horaria, credito: credito});

            const disciplina = await repository.selectOne(id_disciplina);
            res.status(200).json({message: "Disciplina editada com sucesso!", disciplina: disciplina});
        }else{
            res.status(404).json({id_disciplina: `${id_disciplina}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarDisciplina = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new DisciplinaRepository();
    const id_disciplina = Number(req.query.id);
    
    const find = await repository.find(id_disciplina);

    try{
        if(find){
            await repository.destroy(id_disciplina);
            const disciplina = await repository.selectOne(id_disciplina);

            if(!disciplina)
                res.status(200).json({message: "Disciplina deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o disciplina!"});

        }else{
            res.status(400).send({message: `Id: ${id_disciplina} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
import {Request, Response, NextFunction} from "express";
import AreaDisciplinarRepository from "../../repositories/areaDisciplinarRepository";
import DisciplinaRepository from "../../repositories/disciplinaRepository";
import AreaRepository from "../../repositories/areaRepository";

export const vincularDisciplina = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaDisciplinarRepository();

    const repository_disciplina = new DisciplinaRepository();
    const repository_area = new AreaRepository();

    const {id_area, id_disciplina} = req.body;

    const disciplina = await repository_disciplina.find(id_disciplina);
    const area = await repository_area.find(id_area);

    if (!disciplina){
        res.status(400).json({id_disciplina: `${id_disciplina}`, message: "Disciplina não encontrada"});
    }else if(!area){
        res.status(400).json({id_area: `${id_area}`, message: "Area não encontrada"});
    }else{
        await repository.insert({id_area, id_disciplina});
        res.status(200).send("Vinculado com sucesso");
    }
};

export const desvincularDisciplina = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaDisciplinarRepository();

    const repository_disciplina = new DisciplinaRepository();
    const repository_area = new AreaRepository();

    const id_area = Number(req.query.id_area);
    const id_disciplina = Number(req.query.id_disciplina);

    const disciplina = await repository_disciplina.find(id_disciplina);
    const area = await repository_area.find(id_area);

    if (!disciplina){
        res.status(400).json({id_disciplina: `${id_disciplina}`, message: "Disciplina não encontrada"});
    }else if(!area){
        res.status(400).json({id_area: `${id_area}`, message: "Area não encontrada"});
    }else{
        await repository.destroy(id_area, id_disciplina);
        res.status(200).send("Desvinculado com sucesso");
    }
};
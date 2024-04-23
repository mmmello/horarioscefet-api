import {Request, Response, NextFunction} from "express";
import GradeRepository from "../../repositories/gradeRepository";

export const criarGrade = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new GradeRepository();
    const {anoletivo, semestre, horario, dia} = req.body;
    await repository.insert({anoletivo, semestre, horario, dia});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarGrades = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new GradeRepository();
    let grades = await repository.selectAll();

    res.status(200).json(grades);
};

export const editarGrade = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new GradeRepository();
    const {anoletivo, semestre, horario, dia} = req.body;
    const id_grade = Number(req.query.id);
    const find = await repository.find(id_grade);

    try{
        if(find){
            await repository.update(id_grade,{
                anoletivo: anoletivo,
                semestre: semestre,
                horario: horario,
                dia: dia
            });
            const grade = await repository.selectOne(id_grade);
            res.status(200).json({message: "Grade editada com sucesso!", grade});
        }else{
            res.status(404).json({id_grade:`${id_grade}`, message:"Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};

export const deletarGrade = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository = new GradeRepository();
    const id_grade = Number(req.query.id);
    const find = await repository.find(id_grade);

    try{
        if(find){
            await repository.destroy(id_grade);
            const grade = await repository.selectOne(id_grade);

            if(!grade)
                res.status(200).json({message: "Grade deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar a grade!"});

        }else{
            res.status(404).send({message:`Id: ${id_grade} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error:error.message});
    }
};
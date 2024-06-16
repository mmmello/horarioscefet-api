import {Request, Response, NextFunction} from "express";

import AulaRepository       from "../../repositories/aulaRepository";
import GradeRepository      from "../../repositories/gradeRepository";
import DisciplinaRepository from "../../repositories/disciplinaRepository";
import ProfessorRepository  from "../../repositories/professorRepository";
import SalaRepository       from "../../repositories/salaRepository";

export const criarAula = async (req: Request, res: Response, next: NextFunction) => {
    const repository            = new AulaRepository();

    const repository_grade      = new GradeRepository();
    const repository_disciplina = new DisciplinaRepository();
    const repository_professor  = new ProfessorRepository();
    const repository_sala       = new SalaRepository();

    const {horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala} = req.body;

    const grade         = await repository_grade.find(id_grade);
    const disciplina    = await repository_disciplina.find(id_disciplina);
    const professor     = await repository_professor.find(id_professor);
    const sala          = await repository_sala.find(id_sala);

    if (!grade){
        res.status(400).json({id_grade: `${id_grade}`, message: "Grade não encontrada!"});
    }else if(!disciplina){
        res.status(400).json({id_disciplina: `${id_disciplina}`, message: "Disciplina não encontrada!"});
    }else if(!professor){
        res.status(400).json({id_professor: `${id_professor}`, message: "Professor não encontrado!"});
    }else if(!sala){
        res.status(400).json({id_sala: `${id_sala}`, message: "Sala não encontrada!"});
    }else{
        await repository.insert({horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala});
        res.status(200).send("Dados inseridos com sucesso!");
    }
}

export const listarAulas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AulaRepository();

    const anoletivo  = Number(req.query.anoletivo);
    const periodo    = Number(req.query.periodo);
    const optativa    = Number(req.query.optativa);

    let aulas        = await repository.selectAll({anoletivo, periodo}, {optativa});

    res.status(200).json(aulas);
};

export const editarAula = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AulaRepository();
    const {horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala} = req.body;

    const id_aula = Number(req.query.id);

    const find = await repository.find(id_aula);

    try{
        if(find){
            await repository.update(id_aula, {horario_inicio: horario_inicio, horario_fim: horario_fim, dia: dia, id_grade: id_grade, id_disciplina: id_disciplina, id_professor: id_professor, id_sala: id_sala});

            const aula = await repository.selectOne(id_aula);
            res.status(200).json({message: "Aula editada com sucesso!", aula: aula});
        }else{
            res.status(400).json({id_aula: `${id_aula}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarAula = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AulaRepository();
    const id_aula = Number(req.query.id);
    
    const find = await repository.find(id_aula);

    try{
        if(find){
            await repository.destroy(id_aula);
            const aula = await repository.selectOne(id_aula);

            if(!aula)
                res.status(200).json({message: "Aula deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o aula!"});

        }else{
            res.status(400).send({message: `Id: ${id_aula} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
import {Request, Response, NextFunction} from "express";
import ProfessorRepository from "../../repositories/professorRepository";

export const criarProfessor = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new ProfessorRepository();
    const {nome, email} = req.body;

    await repository.insert({nome, email});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarProfessores = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new ProfessorRepository();
    let professores = await repository.selectAll();

    res.status(200).json(professores);
};

export const editarProfessor = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new ProfessorRepository();
    const {nome, email} = req.body;

    const id_professor = Number(req.query.id);

    const find = await repository.find(id_professor);

    try{
        if(find){
            await repository.update(id_professor, {nome: nome, email: email});

            const professor = await repository.selectOne(id_professor);
            res.status(200).json({message: "Professor editado com sucesso!", professor: professor});
        }else{
            res.status(404).json({id_professor: `${id_professor}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarProfessor = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new ProfessorRepository();
    const id_professor = Number(req.query.id);
    
    const find = await repository.find(id_professor);

    try{
        if(find){
            await repository.destroy(id_professor);
            const professor = await repository.selectOne(id_professor);

            if(!professor)
                res.status(200).json({message: "Professor deletado com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o professor!"});

        }else{
            res.status(404).send({message: `Id: ${id_professor} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
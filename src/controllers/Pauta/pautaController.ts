import {Request, Response, NextFunction} from "express";
import PautaRepository from "../../repositories/pautaRepository";

export const criarPauta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaRepository();
    const {pauta} = req.body;

    await repository.insert({pauta});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarPautas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaRepository();
    let pautas = await repository.selectAll();

    res.status(200).json(pautas);
};

export const editarPauta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaRepository();
    const {pauta} = req.body;

    const id_pauta = Number(req.query.id);

    const find = await repository.find(id_pauta);

    try{
        if(find){
            await repository.update(id_pauta, {pauta: pauta});

            const pauta_retorno = await repository.selectOne(id_pauta);
            res.status(200).json({message: "Pauta editada com sucesso!", pauta: pauta_retorno});
        }else{
            res.status(404).json({id_pauta: `${id_pauta}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarPauta = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaRepository();
    const id_pauta = Number(req.query.id);
    
    const find = await repository.find(id_pauta);

    try{
        if(find){
            await repository.destroy(id_pauta);
            const pauta = await repository.selectOne(id_pauta);

            if(!pauta)
                res.status(200).json({message: "Pauta deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o Pauta!"});

        }else{
            res.status(404).send({message: `Id: ${id_pauta} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
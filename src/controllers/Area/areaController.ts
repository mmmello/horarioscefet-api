import {Request, Response, NextFunction} from "express";
import AreaRepository from "../../repositories/areaRepository";

export const criarArea = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaRepository();
    const {area} = req.body;

    await repository.insert({area});
    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarAreas = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaRepository();
    let areas = await repository.selectAll();

    res.status(200).json(areas);
};

export const editarArea = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaRepository();
    const {area} = req.body;

    const id_area = Number(req.query.id);

    const find = await repository.find(id_area);

    try{
        if(find){
            await repository.update(id_area, {area: area});

            const area_editada = await repository.selectOne(id_area);
            res.status(200).json({message: "Area editada com sucesso!", area: area_editada});
        }else{
            res.status(404).json({id_area: `${id_area}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarArea = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new AreaRepository();
    const id_area = Number(req.query.id);
    
    const find = await repository.find(id_area);

    try{
        if(find){
            await repository.destroy(id_area);
            const area = await repository.selectOne(id_area);

            if(!area)
                res.status(200).json({message: "Area deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o area!"});

        }else{
            res.status(404).send({message: `Id: ${id_area} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
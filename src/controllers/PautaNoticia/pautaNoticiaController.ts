import {Request, Response, NextFunction} from "express";
import PautaNoticiaRepository from "../../repositories/pautaNoticiaRepository";
import NoticiaRepository from "../../repositories/noticiaRepository";
import PautaRepository from "../../repositories/pautaRepository";

export const vincularNoticia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaNoticiaRepository();

    const repository_noticia    = new NoticiaRepository();
    const repository_pauta      = new PautaRepository();

    const {id_pauta, id_noticia} = req.body;

    const noticia   = await repository_noticia.find(id_noticia);
    const pauta     = await repository_pauta.find(id_pauta);

    if (!noticia){
        res.status(400).json({id_noticia: `${id_noticia}`, message: "Notícia não encontrada"});
    }else if(!pauta){
        res.status(400).json({id_pauta: `${id_pauta}`, message: "Pauta não encontrada"});
    }else{
        await repository.insert({id_pauta, id_noticia});
        res.status(200).send("Vinculado com sucesso");
    }
};

export const desvincularNoticia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PautaNoticiaRepository();

    const repository_noticia = new NoticiaRepository();
    const repository_pauta = new PautaRepository();

    const id_pauta = Number(req.query.id_pauta);
    const id_noticia = Number(req.query.id_noticia);

    const pauta = await repository_pauta.find(id_pauta);
    const noticia = await repository_noticia.find(id_noticia);

    if (!pauta){
        res.status(400).json({id_pauta: `${id_pauta}`, message: "Pauta não encontrada"});
    }else if(!noticia){
        res.status(400).json({id_noticia: `${id_noticia}`, message: "Notícia não encontrada"});
    }else{
        await repository.destroy(id_pauta, id_noticia);
        res.status(200).send("Desvinculado com sucesso");
    }
};
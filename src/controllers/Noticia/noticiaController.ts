import {Request, Response, NextFunction} from "express";
import NoticiaRepository from "../../repositories/noticiaRepository";

export const criarNoticia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new NoticiaRepository();
    const {titulo, subtitulo, texto, imagem, link_fonte} = req.body;

    await repository.insert({titulo, subtitulo, texto, imagem, link_fonte});

    res.status(200).send("Dados inseridos com sucesso!");
}

export const listarNoticias = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new NoticiaRepository();
    let noticias = await repository.selectAll();

    res.status(200).json(noticias);
};

export const editarNoticia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new NoticiaRepository();
    const {titulo, subtitulo, texto, imagem, link_fonte} = req.body;

    const id_noticia = Number(req.query.id);

    const find = await repository.find(id_noticia);

    try{
        if(find){
            await repository.update(id_noticia, {titulo: titulo, subtitulo: subtitulo, texto: texto, imagem: imagem, link_fonte: link_fonte});

            const noticia = await repository.selectOne(id_noticia);
            res.status(200).json({message: "Notícia editada com sucesso!", noticia: noticia});
        }else{
            res.status(404).json({id_noticia: `${id_noticia}`, message: "Id inválido!"});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};

export const deletarNoticia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new NoticiaRepository();
    const id_noticia = Number(req.query.id);
    
    const find = await repository.find(id_noticia);

    try{
        if(find){
            await repository.destroy(id_noticia);
            const noticia = await repository.selectOne(id_noticia);

            if(!noticia)
                res.status(200).json({message: "Notícia deletada com sucesso!"});
            else
                res.status(200).json({message: "Erro ao deletar o notícia!"});

        }else{
            res.status(404).send({message: `Id: ${id_noticia} inválido!`});
        }
    }catch (error: any){
        res.status(400).json({error: error.message});
    }
};
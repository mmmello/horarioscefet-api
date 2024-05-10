import NoticiaModel from "../database/models/NoticiaModel";
import {noticiaDTO} from "../DTO/noticiaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_noticia: Identifier) {
        return await NoticiaModel.findByPk(id_noticia);
    }

    async insert({titulo, subtitulo, texto, imagem, link_fonte}: noticiaDTO) {
        await NoticiaModel.bulkCreate([{
            titulo: titulo,
            subtitulo: subtitulo,
            texto: texto,
            imagem: imagem,
            link_fonte: link_fonte
        }]);
    }

    async selectAll() {
        return NoticiaModel.findAll();
    }

    async selectOne(id_noticia: Identifier) {
        return NoticiaModel.findOne({
            where: {
                id_noticia: id_noticia
            }
        });
    }

    async update(id_noticia: number, {titulo, subtitulo, texto, imagem, link_fonte}: noticiaDTO) {
        return NoticiaModel.update({titulo, subtitulo, texto, imagem, link_fonte}, {
            where: {
                id_noticia: id_noticia,
            },
        });
    }

    async destroy(id_noticia: number) {
        await NoticiaModel.destroy({
            where: {
                id_noticia: id_noticia,
            },
        });
    }
}
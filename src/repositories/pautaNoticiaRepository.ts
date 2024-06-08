import PautaNoticiaModel from "../database/models/PautaNoticiaModel";
import {pautaNoticiaDTO} from "../DTO/pautaNoticiaDTO";
//import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async insert({id_pauta, id_noticia}: pautaNoticiaDTO) {
        await PautaNoticiaModel.bulkCreate([{
            id_pauta: id_pauta, 
            id_noticia: id_noticia
        }]);
    }

    async destroy(id_pauta: number, id_noticia: number) {
        await PautaNoticiaModel.destroy({
            where: {
                id_pauta: id_pauta,
                id_noticia: id_noticia
            },
        });
    }
}
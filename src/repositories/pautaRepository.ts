import PautaModel from "../database/models/PautaModel";
import {pautaDTO} from "../DTO/pautaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_pauta: Identifier) {
        return await PautaModel.findByPk(id_pauta);
    }

    async insert({pauta}: pautaDTO) {
        await PautaModel.bulkCreate([{
            pauta: pauta
        }]);
    }

    async selectAll() {
        return PautaModel.findAll();
    }

    async selectOne(id_pauta: Identifier) {
        return PautaModel.findOne({
            where: {
                id_pauta: id_pauta
            }
        });
    }

    async update(id_pauta: number, {pauta}: pautaDTO) {
        return PautaModel.update({pauta}, {
            where: {
                id_pauta: id_pauta,
            },
        });
    }

    async destroy(id_pauta: number) {
        await PautaModel.destroy({
            where: {
                id_pauta: id_pauta,
            },
        });
    }
}
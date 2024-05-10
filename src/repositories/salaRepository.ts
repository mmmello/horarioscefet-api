import SalaModel from "../database/models/SalaModel";
import {salaDTO} from "../DTO/salaDTO";
import {Identifier, TEXT} from "sequelize";

export default class SalaRepository {

    async find(id_sala: Identifier) {
        return await SalaModel.findByPk(id_sala);
    }

    async insert({sala, pavilhao, andar, acessivel}: salaDTO) {
        await SalaModel.bulkCreate([{
            sala: sala,
            pavilhao: pavilhao,
            andar: andar,
            acessivel: acessivel
        }]);
    }

    async selectAll() {
        return SalaModel.findAll();
    }

    async selectOne(id_sala: Identifier) {
        return SalaModel.findOne({
            where: {
                id_sala: id_sala
            }
        });
    }

    async update(id_sala: number, {sala, pavilhao, andar, acessivel}: salaDTO) {
        return SalaModel.update({sala, pavilhao, andar, acessivel}, {
            where: {
                id_sala: id_sala,
            },
        });
    }

    async destroy(id_sala: number) {
        await SalaModel.destroy({
            where: {
                id_sala: id_sala,
            },
        });
    }
}
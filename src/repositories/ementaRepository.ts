import EmentaModel from "../database/models/EmentaModel";
import {ementaDTO} from "../DTO/ementaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_ementa: Identifier) {
        return await EmentaModel.findByPk(id_ementa);
    }

    async insert({descricao, id_disciplina}: ementaDTO) {
        await EmentaModel.bulkCreate([{
            descricao: descricao, 
            id_disciplina: id_disciplina
        }]);
    }

    async selectAll() {
        return EmentaModel.findAll();
    }

    async selectOne(id_ementa: Identifier) {
        return EmentaModel.findOne({
            where: {
                id_ementa: id_ementa
            }
        });
    }

    /*async selectLast(id_disciplina: Identifier) {
        return EmentaModel.findOne({
            where: {
                id_disciplina: id_disciplina
            },

            order: [
                ['createdAt', 'DESC']
            ]
        });
    }*/

    async update(id_ementa: number, {descricao, id_disciplina}: ementaDTO) {
        return EmentaModel.update({descricao, id_disciplina}, {
            where: {
                id_ementa: id_ementa,
            },
        });
    }

    async destroy(id_ementa: number) {
        await EmentaModel.destroy({
            where: {
                id_ementa: id_ementa,
            },
        });
    }
}
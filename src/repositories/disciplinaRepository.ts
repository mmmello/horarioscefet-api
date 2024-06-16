import DisciplinaModel from "../database/models/DisciplinaModel";
import AreaModel from '../database/models/AreaModel';
import EmentaModel from '../database/models/EmentaModel';
import {disciplinaDTO} from "../DTO/disciplinaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_disciplina: Identifier) {
        return await DisciplinaModel.findByPk(id_disciplina);
    }

    async insert({nome, carga_horaria, credito, optativa}: disciplinaDTO) {
        await DisciplinaModel.bulkCreate([{
            nome: nome,
            carga_horaria: carga_horaria,
            credito: credito,
            optativa: optativa
        }]);
    }

    async selectAll() {
        return DisciplinaModel.findAll({
            include: [
                {model: AreaModel},
                {
                    model: EmentaModel,
                    limit: 1,
                    order: [['createdAt', 'DESC']]
                }
            ]
        });
    }

    async selectOne(id_disciplina: Identifier) {
        return DisciplinaModel.findOne({
            where: {
                id_disciplina: id_disciplina
            }
        });
    }

    async update(id_disciplina: number, {nome, carga_horaria, credito, optativa}: disciplinaDTO) {
        return DisciplinaModel.update({nome, carga_horaria, credito, optativa}, {
            where: {
                id_disciplina: id_disciplina,
            },
        });
    }

    async destroy(id_disciplina: number) {
        await DisciplinaModel.destroy({
            where: {
                id_disciplina: id_disciplina,
            },
        });
    }
}
import AulaModel from "../database/models/AulaModel";
import {aulaDTO} from "../DTO/aulaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_aula: Identifier) {
        return await AulaModel.findByPk(id_aula);
    }

    async insert({horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala}: aulaDTO) {
        await AulaModel.bulkCreate([{
            horario_inicio: horario_inicio,
            horario_fim: horario_fim,
            dia: dia,
            id_grade: id_grade,
            id_disciplina: id_disciplina,
            id_professor: id_professor,
            id_sala: id_sala
        }]);
    }

    async selectAll() {
        return AulaModel.findAll();
    }

    async selectOne(id_aula: Identifier) {
        return AulaModel.findOne({
            where: {
                id_aula: id_aula
            }
        });
    }

    async update(id_aula: number, {horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala}: aulaDTO) {
        return AulaModel.update({horario_inicio, horario_fim, dia, id_grade, id_disciplina, id_professor, id_sala}, {
            where: {
                id_aula: id_aula,
            },
        });
    }

    async destroy(id_aula: number) {
        await AulaModel.destroy({
            where: {
                id_aula: id_aula,
            },
        });
    }
}
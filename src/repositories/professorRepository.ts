import ProfessorModel from "../database/models/ProfessorModel";
import {professorDTO} from "../DTO/professorDTO";
import {Identifier, TEXT} from "sequelize";

export default class ProfessorRepository {

    async find(id_professor: Identifier) {
        return await ProfessorModel.findByPk(id_professor);
    }

    async insert({nome, email}: professorDTO) {
        await ProfessorModel.bulkCreate([{
            nome: nome,
            email: email
        }]);
    }

    async selectAll() {
        return ProfessorModel.findAll();
    }

    async selectOne(id_professor: Identifier) {
        return ProfessorModel.findOne({
            where: {
                id_professor: id_professor
            }
        });
    }

    async update(id_professor: number, {nome, email}: professorDTO) {
        return ProfessorModel.update({nome, email}, {
            where: {
                id_professor: id_professor,
            },
        });
    }

    async destroy(id_professor: number) {
        await ProfessorModel.destroy({
            where: {
                id_professor: id_professor,
            },
        });
    }
}
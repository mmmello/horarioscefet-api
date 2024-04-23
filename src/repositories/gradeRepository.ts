import GradeModel from "../database/models/GradeModel";
import {gradeInterface} from "../interfaces/gradeInterface";
import {Identifier, TEXT} from "sequelize";

export default class AlunoRepository {

    async find(id_grade: Identifier) {
        return await GradeModel.findByPk(id_grade);
    }

    async insert({anoletivo, semestre, horario, dia}: gradeInterface) {
        await GradeModel.bulkCreate([{
            anoletivo: anoletivo,
            semestre: semestre,
            horario: horario,
            dia: dia
        }]);
    }

    async selectAll() {
        return GradeModel.findAll();
    }

    async selectOne(id_grade: Identifier) {
        return GradeModel.findOne({
            where: {
                id_grade: id_grade
            }
        });
    }

    async update(id_grade: number, {anoletivo, semestre, horario, dia}: gradeInterface) {
        return GradeModel.update({anoletivo, semestre, horario, dia}, {
            where: {
                id_grade: id_grade,
            },
        });
    }

    async destroy(id_grade: number) {
        await GradeModel.destroy({
            where: {
                id_grade: id_grade,
            },
        });
    }
}
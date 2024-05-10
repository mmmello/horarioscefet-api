import GradeModel from "../database/models/GradeModel";
import {gradeDTO} from "../DTO/gradeDTO";
import {Identifier, TEXT} from "sequelize";

export default class GradeRepository {

    async find(id_grade: Identifier) {
        return await GradeModel.findByPk(id_grade);
    }

    async insert({anoletivo, semestre, periodo}: gradeDTO) {
        await GradeModel.bulkCreate([{
            anoletivo: anoletivo,
            semestre: semestre,
            periodo: periodo
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

    async update(id_grade: number, {anoletivo, semestre, periodo}: gradeDTO) {
        return GradeModel.update({anoletivo, semestre, periodo}, {
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
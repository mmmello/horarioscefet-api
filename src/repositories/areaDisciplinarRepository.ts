import AreaDisciplinarModel from "../database/models/AreaDisciplinarModel";
import {areaDisciplinarDTO} from "../DTO/areaDisciplinarDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async insert({id_area, id_disciplina}: areaDisciplinarDTO) {
        await AreaDisciplinarModel.bulkCreate([{
            id_area: id_area, 
            id_disciplina: id_disciplina
        }]);
    }

    async destroy(id_area: number, id_disciplina: number) {
        await AreaDisciplinarModel.destroy({
            where: {
                id_area: id_area,
                id_disciplina: id_disciplina
            },
        });
    }
}
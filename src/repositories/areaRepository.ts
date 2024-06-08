import AreaModel from "../database/models/AreaModel";
import {areaDTO} from "../DTO/areaDTO";
import {Identifier, TEXT} from "sequelize";

export default class DisciplinaRepository {

    async find(id_area: Identifier) {
        return await AreaModel.findByPk(id_area);
    }

    async insert({area}: areaDTO) {
        await AreaModel.bulkCreate([{
            area: area
        }]);
    }

    async selectAll() {
        return AreaModel.findAll();
    }

    async selectOne(id_area: Identifier) {
        return AreaModel.findOne({
            where: {
                id_area: id_area
            }
        });
    }

    async update(id_area: number, {area}: areaDTO) {
        return AreaModel.update({area}, {
            where: {
                id_area: id_area,
            },
        });
    }

    async destroy(id_area: number) {
        await AreaModel.destroy({
            where: {
                id_area: id_area,
            },
        });
    }
}
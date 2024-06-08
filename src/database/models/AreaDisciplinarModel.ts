import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey
} from "sequelize-typescript";

import {Identifier} from "sequelize";
import DisciplinaModel from './DisciplinaModel';
import AreaModel from './AreaModel';
  
  @Table({
    timestamps: true,
    tableName: "area_disciplinar",
    modelName: "AreaDisciplinarModel",
  })

  class AreaDisciplinarModel extends Model{

    @ForeignKey(() => AreaModel)
    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_area: Identifier;

    @ForeignKey(() => DisciplinaModel)
    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_disciplina: Identifier;
}

export default AreaDisciplinarModel;
import {
    Table,
    Column,
    Model,
    DataType,
    BelongsToMany
} from "sequelize-typescript";

import {Identifier} from "sequelize";
import DisciplinaModel from './DisciplinaModel';
import AreaDisciplinarModel from './AreaDisciplinarModel';
  
  @Table({
    timestamps: true,
    tableName: "area",
    modelName: "AreaModel",
  })

  class AreaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_area: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare area: string;

    @BelongsToMany(() => DisciplinaModel, () => AreaDisciplinarModel)
    declare disciplinas: DisciplinaModel[];
}

export default AreaModel;
import {
    Table,
    Column,
    Model,
    DataType,
    HasMany
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import AulaModel from './AulaModel';
  
  @Table({
    timestamps: true,
    tableName: "grade",
    modelName: "GradeModel",
  })

  class GradeModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_grade: Identifier;

    @Column({
        type: DataType.NUMBER,
    })
    declare anoletivo: number;

    @Column({
        type: DataType.NUMBER,
    })
    declare semestre: number;

    @Column({
      type: DataType.NUMBER,
    })
    declare periodo: number;

    @HasMany(() => AulaModel)
    declare aulas: AulaModel[];
}

export default GradeModel;
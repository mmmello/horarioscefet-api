import {
    Table,
    Column,
    Model,
    DataType,
    BelongsToMany
} from "sequelize-typescript";
import {Identifier} from "sequelize";
  
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
}

export default GradeModel;
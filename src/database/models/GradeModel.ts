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
    tableName: "grades",
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
        type: DataType.TEXT,
    })
    declare horario: string;

    @Column({
      type: DataType.TEXT,
  })
  declare dia: string;
}

export default GradeModel;
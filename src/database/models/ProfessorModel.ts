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
    tableName: "professor",
    modelName: "ProfessorModel",
  })

  class ProfessorModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_professor: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare nome: string;

    @Column({
      type: DataType.TEXT,
    })
    declare email: string;
}

export default ProfessorModel;
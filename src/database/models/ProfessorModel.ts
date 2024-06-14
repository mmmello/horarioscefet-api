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

    @HasMany(() => AulaModel)
    declare aulas: AulaModel[];
}

export default ProfessorModel;
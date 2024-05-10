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
    tableName: "disciplina",
    modelName: "DisciplinaModel",
  })

  class DisciplinaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_disciplina: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare nome: string;

    @Column({
      type: DataType.TEXT,
    })
    declare carga_horaria: string;

    @Column({
      type: DataType.TEXT,
    })
    declare credito: string;
}

export default DisciplinaModel;
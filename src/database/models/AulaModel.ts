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
    tableName: "aula",
    modelName: "AulaModel",
  })

  class AulaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_aula: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare horario_inicio: string;

    @Column({
      type: DataType.TEXT,
    })
    declare horario_fim: string;

    @Column({
      type: DataType.TEXT,
    })
    declare dia: string;

    @Column({
      type: DataType.NUMBER,
    })
    declare id_grade: number;

    @Column({
      type: DataType.NUMBER,
    })
    declare id_disciplina: number;

    @Column({
      type: DataType.NUMBER,
    })
    declare id_professor: number;

    @Column({
      type: DataType.NUMBER,
    })
    declare id_sala: number;
}

export default AulaModel;
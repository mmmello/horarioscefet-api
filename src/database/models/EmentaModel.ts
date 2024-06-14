import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import DisciplinaModel from './DisciplinaModel';
  
  @Table({
    timestamps: true,
    tableName: "ementa",
    modelName: "EmentaModel",
  })

  class EmentaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_ementa: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare descricao: string;

    @ForeignKey(() => DisciplinaModel)
    @Column({
      type: DataType.NUMBER,
    })
    declare id_disciplina: number;

    @BelongsTo(() => DisciplinaModel)
    declare disciplina: DisciplinaModel;
}

export default EmentaModel;
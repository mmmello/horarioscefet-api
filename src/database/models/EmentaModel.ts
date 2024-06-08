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

    @Column({
      type: DataType.NUMBER,
    })
    declare id_disciplina: number;
}

export default EmentaModel;
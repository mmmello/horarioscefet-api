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
    tableName: "sala",
    modelName: "SalaModel",
  })

  class SalaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_sala: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare sala: string;

    @Column({
      type: DataType.TEXT,
    })
    declare pavilhao: string;

    @Column({
      type: DataType.TEXT,
    })
    declare andar: string;

    @Column({
      type: DataType.NUMBER,
    })
    declare acessivel: number;
}

export default SalaModel;
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
    tableName: "usuario",
    modelName: "UsuarioModel",
  })

  class UsuarioModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_usuario: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare nome: string;

    @Column({
      type: DataType.TEXT,
    })
    declare email: string;

    @Column({
      type: DataType.TEXT,
    })
    declare senha: string;
}

export default UsuarioModel;
import {
    Table,
    Column,
    Model,
    DataType,
    BeforeCreate
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import bcrypt from 'bcryptjs';
  
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

    @BeforeCreate
    static async hashPassword(instance: UsuarioModel) {
        const salt = await bcrypt.genSalt(10);
        instance.senha = await bcrypt.hash(instance.senha, salt);
    }
}

export default UsuarioModel;
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey
} from "sequelize-typescript";

import {Identifier} from "sequelize";
import PautaModel from './PautaModel';
import NoticiaModel from './NoticiaModel';
  
  @Table({
    timestamps: true,
    tableName: "pauta_noticia",
    modelName: "PautaNoticiaModel",
  })

  class PautaNoticiaModel extends Model{

    @ForeignKey(() => PautaModel)
    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_pauta: Identifier;

    @ForeignKey(() => NoticiaModel)
    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_noticia: Identifier;
}

export default PautaNoticiaModel;
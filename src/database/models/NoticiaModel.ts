import {
    Table,
    Column,
    Model,
    DataType,
    BelongsToMany
} from "sequelize-typescript";

import {Identifier} from "sequelize";
import PautaModel from './PautaModel';
import PautaNoticiaModel from './PautaNoticiaModel';
  
  @Table({
    timestamps: true,
    tableName: "noticia",
    modelName: "NoticiaModel",
  })

  class NoticiaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_noticia: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare titulo: string;

    @Column({
      type: DataType.TEXT,
    })
    declare subtitulo: string;

    @Column({
      type: DataType.TEXT,
    })
    declare texto: string;

    @Column({
      type: DataType.TEXT,
    })
    declare imagem: string;

    @Column({
      type: DataType.TEXT,
    })
    declare link_fonte: string;

    @BelongsToMany(() => PautaModel, () => PautaNoticiaModel)
    declare Pautas: PautaModel[];
}

export default NoticiaModel;
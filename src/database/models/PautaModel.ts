import {
    Table,
    Column,
    Model,
    DataType,
    BelongsToMany
} from "sequelize-typescript";

import {Identifier} from "sequelize";
import NoticiaModel from './NoticiaModel';
import PautaNoticiaModel from './PautaNoticiaModel';
  
  @Table({
    timestamps: true,
    tableName: "pauta",
    modelName: "PautaModel",
  })

  class PautaModel extends Model{

    @Column({
      primaryKey: true,
      type: DataType.NUMBER,
    })
    declare id_pauta: Identifier;

    @Column({
        type: DataType.TEXT,
    })
    declare pauta: string;

    @BelongsToMany(() => NoticiaModel, () => PautaNoticiaModel)
    declare Pautas: NoticiaModel[];
}

export default PautaModel;
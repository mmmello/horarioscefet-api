import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import {Identifier} from "sequelize";
import ProfessorModel from './ProfessorModel';
import DisciplinaModel from './DisciplinaModel';
import SalaModel from './SalaModel';
import GradeModel from './GradeModel';
  
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

    @ForeignKey(() => GradeModel)
    @Column({
      type: DataType.NUMBER,
    })
    declare id_grade: number;

    @ForeignKey(() => DisciplinaModel)
    @Column({
      type: DataType.NUMBER,
    })
    declare id_disciplina: number;

    @ForeignKey(() => ProfessorModel)
    @Column({
      type: DataType.NUMBER,
    })
    declare id_professor: number;

    @ForeignKey(() => SalaModel)
    @Column({
      type: DataType.NUMBER,
    })
    declare id_sala: number;

    @BelongsTo(() => GradeModel)
    declare grade: GradeModel;

    @BelongsTo(() => DisciplinaModel)
    declare disciplina: DisciplinaModel;
  
    @BelongsTo(() => ProfessorModel)
    declare professor: ProfessorModel;
  
    @BelongsTo(() => SalaModel)
    declare sala: SalaModel;
}

export default AulaModel;
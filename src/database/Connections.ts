import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'horarioscefet',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: 3306,
  models: [__dirname + "/models"],
  timezone: '-03:00'
});

(async () => {
  try {
    await sequelize.sync();
    console.log('Tabela sincronizada');

  } catch (error) {
    console.error('Erro sincronizar tabela', error);
  }
})();

export default sequelize;
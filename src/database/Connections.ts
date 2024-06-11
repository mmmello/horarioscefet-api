import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT as Dialect,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  models: [__dirname + "/models"],
  timezone: process.env.DB_TIMEZONE
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
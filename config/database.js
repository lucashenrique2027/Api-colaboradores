import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const database = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        define: {
            freezeTableName: true
        }
    }
);

export default database;
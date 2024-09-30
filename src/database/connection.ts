import { DataSource } from "typeorm";
import { DB_PASSWORD, DB_USER, DB_NAME, DB_PORT, LOCALHOST } from "../.env/config"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: LOCALHOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"], // Ajustar la ruta a las entidades
    subscribers: [],
    migrations: [],
})
import app from "./app";
import { PORT } from './.env/config';
import { AppDataSource } from "./database/connection";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("DATABASE CONNECTED");
        app.listen(PORT, () => {
            console.log("SERVER LISTEN ON PORT: ", PORT)
        });
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message);
        }
    }
}

main();
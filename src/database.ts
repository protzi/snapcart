import { createConnection } from "typeorm";

export const connectDatabase = async () => {
    return createConnection({
        type: "sqlite",
        database: "database.sqlite",
        entities: [
            __dirname + "/models/*.ts"
        ],
        synchronize: true,
    });
};
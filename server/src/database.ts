import * as Knex from "knex"
import knexTinyLogger from "knex-tiny-logger"
import { databaseLogger } from "./logger"

let config = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: "src/migrations"
    }
}

const instance = Knex(config)
knexTinyLogger(instance, {
    logger: (log: String, duration: String, query: String) => {
        databaseLogger.debug(duration, query)
    }
})

export default instance
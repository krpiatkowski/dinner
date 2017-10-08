import * as Knex from "knex"
import knexTinyLogger from "knex-tiny-logger"
import { databaseLogger } from "./logger"

let config = require("../knexfile.js")

const instance = Knex(process.env.NODE_ENV !== "production" ? config.development : config.production)
knexTinyLogger(instance, {
    logger: (log: String, duration: String, query: String) => {
        databaseLogger.debug(duration, query)
    }
})

export default instance
import * as dotenv from "dotenv"
dotenv.config()

import logger from "./logger"
import database from "./database"
import server from "./server"


database.migrate.latest().then((e) => {
    const port = process.env.PORT || 8080
    server.listen(port, () => {
        logger.info(`Started backend on ${port}`)
    })
})
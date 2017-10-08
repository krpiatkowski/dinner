import * as express from "express"
import * as bodyParser from "body-parser"
import * as Log4js from "log4js"
import { requestLogger } from "./logger"
import { validationHandler } from "./utils/validator"

import Recipe from "./routes/recipe"

const server = express()
server.use(bodyParser.json())
server.use(Log4js.connectLogger(requestLogger, { level: Log4js.levels.INFO, format: ":status :method :url" }))

server.post("/recipes", Recipe.create)
server.get("/recipes", Recipe.list)

server.use(validationHandler)

export default server

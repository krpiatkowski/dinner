import * as Log4js from "log4js"

Log4js.configure({
    appenders: { console: { type: "console" } },
    categories: {
        default: { appenders: ["console"], level: "info" },
        request: {  appenders: ["console"], level: "info" },
        database: { appenders: ["console"], level: "debug" }
    }
})

export default Log4js.getLogger()
export const databaseLogger = Log4js.getLogger("database")
export const requestLogger = Log4js.getLogger("request")
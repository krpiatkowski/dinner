export default class ServerError {
    readonly message: String
    constructor(message: String = "") {
        this.message = message
    }
}

export class NotFound extends ServerError { }
export class Internal extends ServerError { }
export class BadGateway extends ServerError { }

export const exceptionWrapper = fn => (...args) => fn(...args).catch(args[2])

export const errorHandler = (err:any, res:any) => {
    if (err instanceof NotFound) {
        res.status(404).json(err.message)
    } else {
        res.status(500)
    }
}
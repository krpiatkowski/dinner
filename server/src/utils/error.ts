export default class ServerError {
    readonly status: number
    readonly message: string
    readonly stack: string
    constructor(status: number, error: Error) {
        this.status = status
        this.message = error.toString()
        this.stack = error.stack
    }
}

export class NotFound extends ServerError { 
    constructor(error: Error) {
        super(404, error)
    }
}
export class Internal extends ServerError { 
    constructor(error: Error) {
        super(500, error)
    }
}

export class BadGateway extends ServerError { 
    constructor(error: Error) {
        super(502, error)
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError {
    constructor(message = "") {
        this.message = message;
    }
}
exports.default = ServerError;
class NotFound extends ServerError {
}
exports.NotFound = NotFound;
class Internal extends ServerError {
}
exports.Internal = Internal;
class BadGateway extends ServerError {
}
exports.BadGateway = BadGateway;
exports.exceptionWrapper = fn => (...args) => fn(...args).catch(args[2]);
exports.errorHandler = (err, res) => {
    if (err instanceof NotFound) {
        res.status(404).json(err.message);
    }
    else {
        res.status(500);
    }
};
//# sourceMappingURL=error.js.map
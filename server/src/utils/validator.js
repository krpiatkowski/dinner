"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JoiValidator = require("express-joi-validation");
const validator = JoiValidator({
    passError: true
});
exports.default = validator;
exports.validationHandler = (err, req, res, next) => {
    if (err.error && err.error.isJoi) {
        res.status(400).json({
            type: err.type,
            errors: err.error.details.map(error => error.message)
        });
    }
    else {
        next(err);
    }
};
//# sourceMappingURL=validator.js.map
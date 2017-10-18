import * as JoiValidator from "express-joi-validation"
import ServerError from "./error"

const validator = JoiValidator({
    passError: true
})

export default validator

export const validationHandler = (err, req, res, next) => {
    if (err.error && err.error.isJoi) {
        res.status(400).json({            
            type: "Validation",
            subtype: err.type,
            errors: err.error.details.map(error => error.message)
        })
    } else if (err instanceof ServerError) {
        res.status(err.status).json({
            type: "Error",            
            errors: [err.message, err.stack.split("\n").map(m => m.trim()).slice(1)]
        })
    } else {
        next(err)
    }
}
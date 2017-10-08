import * as JoiValidator from "express-joi-validation"

const validator = JoiValidator({
    passError: true
})

export default validator

export const validationHandler = (err, req, res, next) => {
    if (err.error && err.error.isJoi) {
        res.status(400).json({
            type: err.type,
            errors: err.error.details.map(error => error.message)
        })
    } else {
        next(err)
    }
}
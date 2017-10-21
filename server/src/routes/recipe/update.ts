import { Request, Response, NextFunction } from "express"
import * as Joi from "joi"

import validator from "../../utils/validator"
import { Internal } from "../../utils/error"
import database from "../../database"

export default [
    validator.body(Joi.object({
        id: Joi.string().guid().required(),
        name: Joi.string().min(3).required()
    })),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await database("recipes").update({ name: req.body.name }).where("id", req.body.id)
            res.status(result ? 200 : 404)
        } catch (ex) {
            next(new Internal(ex))
        }
    }
]
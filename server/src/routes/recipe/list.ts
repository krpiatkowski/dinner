import { Request, Response, NextFunction} from "express"
import * as Joi from "joi"

import validator from "../../utils/validator"
import { Internal } from "../../utils/error"
import database from "../../database"

export default [
    validator.body(Joi.object({
    })),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let recipes = await database("recipes").select()
            res.json(recipes)
        } catch (ex) {
            next(new Internal(ex))
        }
    }
]
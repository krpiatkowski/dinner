import { Request, Response } from "express"
import * as Joi from "joi"

import validator from "../../utils/validator"
import { Internal } from "../../utils/error"
import database from "../../database"

export default [
    validator.body(Joi.object({
        name: Joi.string().min(3).required()
    })),
    async (req: Request, res: Response) => {
        try {
            let recipe = await database.insert(req.body)
            res.json(recipe)
        } catch (ex) {
            throw new Internal(ex)
        }
    }
]
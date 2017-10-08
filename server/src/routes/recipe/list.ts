import { Request, Response } from "express"
import * as Joi from "joi"

import validator from "../../utils/validator"
import { Internal } from "../../utils/error"
import database from "../../database"

export default [
    validator.body(Joi.object({
    })),
    async (req: Request, res: Response) => {
        try {
            let recipes = await database.select().from("recipes")
            res.json(recipes)
        } catch (ex) {
            throw new Internal(ex)
        }
    }
]
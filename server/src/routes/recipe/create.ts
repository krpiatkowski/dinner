import { Request, Response, NextFunction} from "express"
import * as Joi from "joi"

import validator from "../../utils/validator"
import { Internal } from "../../utils/error"
import database from "../../database"

export default [
    validator.body(Joi.object({
        name: Joi.string().min(3).required()    
    })),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let recipe = await database("recipes").insert(req.body, ["id", "name"])
            res.json(recipe)
        } catch (ex) {
            next(new Internal(ex)) 
        }
    }
]
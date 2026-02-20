import {Note, noteSchemaJoi} from "../models/Note.js"

export const validateNote = async (req, res, next) => {
    const {error} = noteSchemaJoi.validate(req.body, {abortEarly: false})

    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }
    next()
}
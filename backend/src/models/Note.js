import mongoose from "mongoose"
import Joi from "joi"

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const noteSchemaJoi = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
})

export const Note = mongoose.model("Note", noteSchema)


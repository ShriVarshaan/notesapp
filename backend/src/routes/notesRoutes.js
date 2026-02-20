import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js"
import {validateNote} from "../middleware/notes.js"

const router = express.Router()

router.route("/")
    .get(getAllNotes)
    .post(validateNote, createNote)

router.route("/:id")
    .get(getNoteById)
    .put(validateNote, updateNote)
    .delete(deleteNote)

export default router
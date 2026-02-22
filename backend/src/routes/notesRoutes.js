import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js"
import {validateNote} from "../middleware/notes.js"
import { isLoggedIn } from "../middleware/auth.js"

const router = express.Router()

router.route("/")
    .get(getAllNotes)
    .post(isLoggedIn, validateNote, createNote)

router.route("/:id")
    .get(isLoggedIn, getNoteById)
    .put(isLoggedIn, validateNote, updateNote)
    .delete(isLoggedIn, deleteNote)

export default router
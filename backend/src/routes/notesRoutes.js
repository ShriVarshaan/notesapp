import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController"

const router = express.Router()

router.route("/")
    .get(getAllNotes)
    .post(createNote)

router.route("/:id")
    .put(updateNote)
    .delete(deleteNote)

export default router
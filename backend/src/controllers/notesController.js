import {Note, noteSchemaJoi} from "../models/Note.js"
export const getAllNotes = async (req, res) => {
    try{
        const notes = await Note.find({})
        res.status(200).json(notes)
    } catch (err){
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
}

export const getNoteById = async (req, res) => {
    try{
        const {id} = req.params
        const note = await Note.findById(id)
        if(!note){
            return res.status(404).json({message: "404 not found"})
        }
        return res.status(200).json({message: note})
    }catch (err){
        res.status(500).json({message: err})
    }
}

export const createNote = async (req, res) => {
    try{
        const newNote = new Note(req.body)
        const savedNote = await newNote.save()
        res.status(201).json({message: savedNote})
    }catch (err){
        res.status(500).json({message: err})
    }
}

export const updateNote = async (req, res) => {
    try{
        const {id} = req.params
        const updatedNote = await Note.findByIdAndUpdate(id, req.body, {returnDocument: "after"})
        if (!updatedNote){
            return res.status(404).json({message: "Note not found"})
        }
        res.status(200).json({message:updatedNote})
    }catch (err){
        res.status(500).json({message: err})
    }
    
}

export const deleteNote = async (req, res) => {
    try{
        const {id} = req.params
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote){
            return res.status(404).json({message: "Note not found"})
        }
        res.status(200).json({message: deletedNote})
    } catch(err){
        res.status(500).json({message: err})
    }
}
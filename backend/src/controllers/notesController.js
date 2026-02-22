import {Note, noteSchemaJoi} from "../models/Note.js"
export const getAllNotes = async (req, res) => {
    try{
        if(req.user){
            const notes = await Note.find({user: req.user._id}).sort({createdAt: -1})
            return res.status(200).json(notes)
        }
        return res.status(200)
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
        if (!note.user.equals(req.user._id)){
            return res.status(401).json({message: "Note doesn't belong to you"})
        }
        return res.status(200).json({message: note})
    }catch (err){
        res.status(500).json({message: err})
    }
}

export const createNote = async (req, res) => {
    try{
        let newNote = new Note(req.body)
        newNote.user = req.user._id
        const savedNote = await newNote.save()
        res.status(201).json({message: savedNote})
    }catch (err){
        res.status(500).json({message: err})
    }
}

export const updateNote = async (req, res) => {
    try{
        const {id} = req.params
        const note = await Note.findById(id)

        if (!note){
            return res.status(404).json({message: "Note not found"})
        }

        if (!note.user.equals(req.user._id)){
            return res.status(401).json({message: "Note doesn't belong to you"})
        }


        const updatedNote = await Note.findByIdAndUpdate(id, req.body, {returnDocument: "after"})
        res.status(200).json({message:updatedNote})
    }catch (err){
        res.status(500).json({message: err})
    }
    
}

export const deleteNote = async (req, res) => {
    try{
        const {id} = req.params
        const note = await Note.findById(id)

        if (!note){
            return res.status(404).json({message: "Note not found"})
        }

        if (!note.user.equals(req.user._id)){
            return res.status(401).json({message: "Note doesn't belong to you"})
        }

        const deletedNote = await Note.findByIdAndDelete(id)

        res.status(200).json({message: deletedNote})
    } catch(err){
        res.status(500).json({message: err})
    }
}
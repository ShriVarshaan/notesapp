export const getAllNotes = async (req, res) => {
    res.status(200).send("Testing")
}

export const createNote = async (req, res) => {
    res.status(201).json({message: "post has been created successfully"})
}

export const updateNote = async (req, res) => {
    res.status(200).json({message:"Post updated successfully"})
}

export const deleteNote = async (req, res) => {
    res.status(200).json({message: "Note deleted successfully"})
}
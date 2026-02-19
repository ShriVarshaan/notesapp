import express from "express"

const router = express.Router()

router.route("/")
    .get((req, res) => {
        res.status(200).send("Testing")
    })
    .post((req, res) => {
        res.status(201).json({message: "post has been created successfully"})
    })

router.route("/:id")
    .put((req, res) => {
        res.status(200).json({message:"Post updated successfully"})
    })
    .delete((req, res) => {
        res.status(200).json({message: "Note deleted successfully"})
    })

export default router
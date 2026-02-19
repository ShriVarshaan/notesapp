import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
const app = express()

app.use(express.json())

app.use("/api/notes", notesRoutes)

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
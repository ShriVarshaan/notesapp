import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"

const app = express()
dotenv.config()

connectDb()

app.use(express.json())

app.use("/api/notes", notesRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000")
})
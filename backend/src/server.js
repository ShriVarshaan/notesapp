import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
import { rateLimiter } from "./middleware/rateLimiter.js"
import cors from "cors"

const app = express()
dotenv.config()

connectDb()

app.use(cors({
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(rateLimiter)


app.use("/api/notes", notesRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000")
})
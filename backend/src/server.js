import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
import { rateLimiter } from "./middleware/rateLimiter.js"
import cors from "cors"
import session from "express-session"
import passport from "passport"

import "./config/passportSetup.js"

const app = express()
dotenv.config()

connectDb()

app.use(session({ secret: `${process.env.SECRET_KEY}`, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(rateLimiter)


app.use("/api/notes", notesRoutes)
app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000")
})
import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    displayName: {
        type: String,
        image: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    notes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }
})

const User = mongoose.model("User", userSchema)

export default User
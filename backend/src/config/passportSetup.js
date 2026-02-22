import passport from "passport"
import {Strategy} from "passport-google-oauth2"
import User from "../models/User.js"
import dotenv from "dotenv"

dotenv.config()


console.log("passport setup")

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.ROUTE}/api/auth/callback`
},
    async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({googleId: profile.id})

        if (!user){
            user =  new User({googleId: profile.id, username: profile.displayName, email: profile.emails[0].value})
            await user.save()
        }

        done(null, user)
    }))


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})
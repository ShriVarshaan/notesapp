import express from "express"
import passport from "passport"
import dotenv from "dotenv"

dotenv.config()
const router = express.Router()

router.get("/", passport.authenticate("google", {scope: ["profile", "email"]}))

router.route("/callback")
    .get(passport.authenticate("google", {failureRedirect: "/login"}),
        (req, res) => {
            res.redirect(`${process.env.FRONTEND_URL}/`)
        }
    )

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }

        req.session.destroy(() => {
            res.clearCookie("connect.sid")

            res.redirect(`${process.env.FRONTEND_URL}`)
        })
    })
})

router.route("/current_user")
    .get((req, res) => {
        res.send(req.user || null)
    })

export default router
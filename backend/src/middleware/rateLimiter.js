import rateLimit from "../config/upstash.js"

export const rateLimiter = async (req, res, next) => {
    try{
        const {success} = await rateLimit.limit("my-limit-key") //add userid here afterwards
        
        if(!success){
            return res.status(429).json({message: "Too many requests"})
        }

        return next()
    } catch (err){
        return res.status(500).json({message: err})
    }
}
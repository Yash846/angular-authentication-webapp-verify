
import express from 'express'
import { getStats } from "../controllers/users.js"

const router = express.Router()

router.get('/stats', getStats)

// router.get("/user/:id",(req,res,next)=>{
//     console.log('Request URL:', req.originalUrl)
//     next()
// },(req,res,next)=>{
//     console.log('Request Type:', req.method)
//     next()
// },(req,res)=>{
//     res.json({
//         status:true,
//         id:req.params.id
//     })
// })


export { router };
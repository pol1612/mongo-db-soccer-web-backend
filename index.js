


import { PORT } from "./config.js";
import express from "express";
import { connect } from "./database/mongoose.js";
const app = express()


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


app.get('/', async (req,res) => {
    console.log(req)
    console.log("aqui")
    res.send('Welcome to MERN stack tutorial.')
})

connect()


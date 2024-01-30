require('dotenv').config()
require("./db")
const express = require('express')
const userRoutes = require('./routes/User')
const postRoutes = require('./routes/Post')


const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use("/users", userRoutes)
app.use("/posts", postRoutes)

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT)
})
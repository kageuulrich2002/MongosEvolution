require('dotenv').config()
const { default: mongoose } = require("mongoose");


mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection

db.on('error', console.error.bind(console, "Database connetion failled ..."))
db.on('open', () => {
    console.log("Database is connected successfully !")
})
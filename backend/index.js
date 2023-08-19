const express = require('express')
const dotenv = require("dotenv");

const app = express()

dotenv.config();

const connectToMongoDB = require("./db")
connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.API_PORT, () => {
    console.log(`App listening on port ${process.env.API_PORT}`)
})
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')

const testServer = express()

testServer.use(cors())

const PORT = 3000 || process.env.PORT

testServer.listen(PORT, () => {
    console.log(`test server started @ port ${PORT}`);
})

testServer.get("/", (req, res) => {
    res.status(200).send(`<h1> project started & waiting for client response !!!</h1>`)
})
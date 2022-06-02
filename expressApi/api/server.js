const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')





const app = express()





app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/', (req, res) => {
    res.send(`<h2>Express/Node Database is Running</h2>`)
})

app.use((err, req, res, next) => {
    res.status(err.code).json(err)
})


module.exports = app
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const { time } = require('console')
const knexSessionStore = require('connect-session-knex')(session)


const app = express()

const sessionConfig = {
    name: 'auth',
    secret: 'authenticateUser',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new knexSessionStore(
        {
            knex: require('../database/db.config'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 1000 * 60 * 60
        }
    )
}

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(session(sessionConfig))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.static('public'))

app.use('/api/', (req, res) => {
    res.send(`
    <h2>API is up</h2>
    `)
})

app.use((err, req, res, next) => {
    res.status(err.code).json(err)
})

module.exports = app
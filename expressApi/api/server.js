const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)

const authRouter = require('../auth/authRouter.js');
const userRouter = require('../users/userRouter.js');
const favoriteRouter = require('../favorties/favoritesRouter')
const authenticate = require('../auth/authenticate.js');


const app = express()

const sessionConfig = { 
    name: 'auth', 
    secret: 'authenticateUser', 
    cookie: { 
        maxAge: 1000 * 60 * 60, 
        secure: false, httpOnly: true 
    }, 
    resave: false, 
    saveUninitialized: false, 
    store: new knexSessionStore( { 
        knex: require('../database/db-config.js'), 
        tablename: 'sessions', 
        sidfieldname: 'sid', 
        createtable: true, 
        clearInterval: 1000 * 60 * 60 
    } ) 
};



app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(session(sessionConfig));


app.use('/api/auth', authRouter);
app.use('/api/users', authenticate, userRouter);
app.use('/api/favorites', favoriteRouter);
app.use('/api', (req, res) => {
    res.send(`<h2>Express/Node Database is Running</h2>`)
})
app.use('/', (req, res) => {
    res.send(`<h2>Server for Express/Node Database is Running</h2>`)
})

app.use((err, req, res, next) => {
    res.status(err.code).json(err)
})


module.exports = app
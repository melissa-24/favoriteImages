const express = require('express')
const path = require('path')
const app = express()
const port = 8000

// const key = require('./js/key')
// const nasa = require('./js/nasa')
// const scripts = require('./js/scripts')
// const tunes = require('./js/tunes')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', function(req, res) {
    res.render('index', {
    })
})
app.get('/nasa', function(req, res) {
    res.render('nasa', {

    })
})
app.get('/tunes', function(req, res) {
    res.render('tunes', {

    })
})
app.get('/api', function(req, res) {
    res.render('api', {
        
    })
})
app.get('/analysis', function(req, res) {
    res.render('analysis', {
        
    })
})


app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})
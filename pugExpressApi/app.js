const express = require('express')
const path = require('path')
const app = express()
const port = 8000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.unsubscribe(express.static(path.join(__dirname, 'public')))



app.get('/', function(req, res) {
    res.render('index', {

    })
})


app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})
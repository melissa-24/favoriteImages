require('dotenv').config();

const app = require('./api/server.js')

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`API Server running on Port: ${PORT}`)
})
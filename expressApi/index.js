require('dotenv').config();


const app = require('./api/server');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})
const express = require('express')
const app = express()
const port = 3000;

// middleware
app.use(express.static('public'))
app.use(express.json())


// attach endpoints
app.use('/api/v1', require('./routes/api/v1/foodtruck'))
app.use(require('./routes/static'))

// server start
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

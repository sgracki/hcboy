const express = require('express')
const app = express()
const port = 1001
const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}))

app.use('/api/v1/', require('./routes/index.route'));

app.listen(port, () => console.log(`Healthcare backend on port ${port}!`))
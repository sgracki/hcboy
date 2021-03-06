const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}))

app.use('/api/v1/', require('./routes/index.route'));
app.use('/', express.static(path.join(__dirname, './web/dist')))

app.listen(port, () => console.log(`Healthcare backend on port ${port}!`))
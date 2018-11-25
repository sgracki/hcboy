const express = require('../node_modules/express')
const app = express()
const port = 1001
const bodyParser = require('../node_modules/body-parser')
const path = require('../node_modules/path')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}))

app.use('/api/v1/', require('./routes/index.route'));
app.use('/', express.static(path.join(__dirname, '../web/dist/web')));
app.use('/**', express.static(path.join(__dirname, '../web/dist/web')));
app.use('/*', express.static(path.join(__dirname, '../web/dist/web')))

app.listen(port, () => console.log(`Healthcare backend on port ${port}!`))
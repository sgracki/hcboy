const express = require('express')
const doctorsRoute = require('./doctors.route')
const router = express.Router() // eslint-disable-line new-cap

router.use('/doctors', doctorsRoute)

module.exports = router
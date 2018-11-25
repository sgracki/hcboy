const express = require('express')
const doctorsRoute = require('./doctors.route')
const twitterRoute = require('./twitter.route')
const router = express.Router() // eslint-disable-line new-cap

router.use('/doctors', doctorsRoute)
router.use('/tweets', twitterRoute)


module.exports = router
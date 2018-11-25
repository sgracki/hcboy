const doctorsCtrl = require('../controllers/doctors.controller')
const express = require('express')
const router = express.Router()

router.route('/')
    .post(doctorsCtrl.listTopDoctors)

module.exports = router
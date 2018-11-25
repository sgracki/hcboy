const twitterCtrl = require('../controllers/twitter.controller')
const express = require('express');
const router = express.Router()

router.route('/')
    .post(twitterCtrl.getTweets)

module.exports = router
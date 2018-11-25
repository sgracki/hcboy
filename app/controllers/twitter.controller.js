
const TweetStream = require('./utils/lib/tweet-stream');
const streamToPromise = require('stream-to-promise')

function getTweets(req, res, next) {
    const { query } = req.body
    const timelineStream = new TweetStream(query, 'latest', {
      count: 10
    })
    streamToPromise(timelineStream).then(tweets => {
      res.json(tweets);

    })
  }

module.exports = {
    getTweets
}
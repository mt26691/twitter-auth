'use strict';

var passport = require('passport'),
  TwitterTokenStrategy = require('passport-twitter-token'),
  twitterConfig = require('./twitter.config.js');

module.exports = function () {

  passport.use(new TwitterTokenStrategy({
    consumerKey: twitterConfig.consumerKey,
    consumerSecret: twitterConfig.consumerSecret,
    includeEmail: true
  },
    function (token, tokenSecret, profile, done) {
      console.log(`user profile-------------`);
      console.log(profile);
      return done(null, profile);
    }));

};

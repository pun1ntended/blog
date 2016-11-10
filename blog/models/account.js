/**
 * Created by Sven on 11/10/16.
 */
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
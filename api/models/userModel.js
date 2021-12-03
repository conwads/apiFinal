'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a name for the user'
  },
  email: {
    type: String,
    required: 'User needs to have an email'
  },
  password: {
    type: String,
    required: 'User needs a password'
  }
});

module.exports = mongoose.model('Users', UserSchema);
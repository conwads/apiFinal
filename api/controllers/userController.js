'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err){
      console.log('Error in create_a_user: ' + err);
      res.send(err);
    }
    console.log('Created user ' + user);
    res.json(user);
  });
};

exports.login = function(req, res) {
  res.json(req)
}
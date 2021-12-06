'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err){
      console.log('Error in create_a_task: ' + err);
      res.send(err);
    }
    console.log('Creating ' + task);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err){
      console.log('Error in read_a_task: ' + err);
      res.send(err);
    }
    console.log('Reading ' + task);
    res.json(task);
  });
};


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
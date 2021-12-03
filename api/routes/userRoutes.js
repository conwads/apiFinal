'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/createuser')
    .post(user.create_a_user);


  app.route('/login')
    .post(user.login)

};
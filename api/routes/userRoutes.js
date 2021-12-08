'use strict';
const auth = require("./middleware/auth");
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/createuser')
    .post(user.create_a_user);
    
  app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  app.route('/login')
    .post(user.login);

};
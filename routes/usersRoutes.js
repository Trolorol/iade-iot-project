var express = require("express");
var router = express.Router();
const Users = require("../models/usersModel");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", async function (req, res, next) {
  let response = await Users.getUser(req.query.user_id);
  res.send(response);
});

module.exports = router;

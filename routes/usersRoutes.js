var express = require("express");
var router = express.Router();
const User = require("../models/usersModel");

router.get("/", async function (req, res, next) {
  let response = await User.getUser(req.query.user_id);
  res.send(response);
});

module.exports = router;

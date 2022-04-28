var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("./login/index");
});

// router.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Authenticated" : "Not Authenticated");
// });

module.exports = router;

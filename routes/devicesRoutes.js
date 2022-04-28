var express = require("express");
var router = express.Router();
const Devices = require("../models/devicesModel");

router.get("/", async function (req, res) {
  let devices = await Devices.getDevices(req.query.user_id);
  res.send(devices);
});

module.exports = router;

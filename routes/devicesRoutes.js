var express = require("express");
var router = express.Router();
const Devices = require("../models/devicesModel");

router.get("/", async function (req, res) {
  try {
    let devices = await Devices.getDevices(req.query.user_id);
    console.log("####");
    console.log(devices);
    console.log("####");
    res.send(devices);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

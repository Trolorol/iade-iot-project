var express = require("express");
var router = express.Router();
const Actions = require("../models/actionsModel");
const Users = require("../models/usersModel");
const Devices = require("../models/devicesModel");

router.post("/", async function (req, res) {
  //TODOOOOOOO
  try {
    user_id = req.body.user_id;
    device_id = req.body.device_id;
    action_id = req.body.action_id;
    value = req.body.value;

    let checkOwnership = await Actions.checkOwnership(user_id, device_id);
    let user = Users.getUser(user_id); //Este user tem de ser formatado como json no model usersModel
    let device = Devices.getDevice(device_id); //Este device tem de ser formatado como json no model devicesModel

    if (checkOwnership.status === 200) {
      let setAction = await Actions.setAction(
        user_id,
        device_id,
        action_id,
        value
      );
    }

    let actions = await Actions.setAction(
      req.body.user_id,
      req.body.device_id,
      req.body.action_id,
      req.body.value
    );
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

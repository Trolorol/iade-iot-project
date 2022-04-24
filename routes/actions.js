var express = require('express');
var router = express.Router();
const actions = require('../models/actionsModel');
const user = require('../models/usersModel');
const device = require('../models/devicesModel');


router.post('/', async function (req, res) { //TODOOOOOOO
    try {
        user_id = req.body.user_id;
        device_id = req.body.device_id;
        action_id = req.body.action_id;
        value = req.body.value;

        let checkOwnership = await actions.checkOwnership(user_id, device_id);
        let user = user.getUser(user_id); //Este user tem de ser formatado como json no model usersModel
        let device = device.getDevice(device_id); //Este device tem de ser formatado como json no model devicesModel

        if (checkOwnership.status === 200) {
            let setAction = await actions.setAction(user_id, device_id, action_id, value);

        }



        let actions = await actions.setAction(req.body.user_id, req.body.device_id, req.body.action_id, req.body.value);
    } catch (error) {
        res.send(error);
    }
});
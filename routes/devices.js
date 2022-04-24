var express = require('express');
var router = express.Router();
const devices = require('../models/devicesModel');

router.get('/id', async function(req, res) {
    try {
        let devices = await devices.getDevices(req.query.user_id);
        res.status(devices.status).json(devices);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
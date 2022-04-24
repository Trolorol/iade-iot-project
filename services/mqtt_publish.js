
require('dotenv').config({path: '../.env'})
var mqtt = require('mqtt');

var client = mqtt.connect(process.env['MQTT_ENDPOINT'], {
    username: process.env['MQTT_USERNAME'],
});


function publish(client_email, device_serial, message) {
    let topic_address = `${device_serial}/${client_email}`;
    client.publish(topic_address, message);
}

module.exports = {publish};





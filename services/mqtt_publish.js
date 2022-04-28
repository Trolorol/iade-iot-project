require("dotenv").config({ path: "../.env" });
var mqtt = require("mqtt");
var encrypt = require("./rot13_encrypt.js");

const connectUrl = `mqtt://${process.env["MQTT_ENDPOINT"]}:${process.env["MQTT_PORT"]}`;

const Client = mqtt.connect(connectUrl);

function publish(client_email, device_id, message) {
  let topic_address = `${client_email}/${device_id}`;
  Client.publish(topic_address, message);
}
let x = encrypt.rot13("joao.calapez.c@gmail.com");

//publish("joao.calapez.c@gmail.com", "01", "message");

module.exports = { publish };

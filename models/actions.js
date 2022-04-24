var pool = require("./connection");
const mqtt = require('../services/mqtt_publish');

module.exports.setAction = async function(user_id, device_id, action_id, value) {
    try {
        let sql = `SELECT * FROM actions WHERE id = '${action_id}'`;
        let result = await pool.query(sql);
        let action = result.rows[0];
        if (action.type === 'mqtt') {
            let topic = action.topic;
            let payload = action.payload;
            payload = payload.replace('{{value}}', value);
            mqtt.publish(topic, payload); //client_email, device_serial, message re verificar isto 
        }
        return {status:200, action};
    } catch (error) {
        return {status:500, error};
    }
}

module.exports.checkOwnership = async function(user_id, device_id) {
    try {
        let sql = `SELECT * FROM devices WHERE id = '${device_id}' AND user_id = '${user_id}'`;
        let result = await pool.query(sql);
        if (result.rows.length === 0) {
            return {status:403, error:'Forbidden'};
        } else {
            return {status:200, device:result.rows[0]};
        }
    } catch (error) {
        return {status:500, error};
    }
}

var pool = require("./connection");

module.exports.getDevices = async function (user_id) {
  try {
    let sql = `SELECT * FROM devices WHERE user_id = '${user_id}'`;
    let result = await pool.query(sql);
    let devices = result.rows;
    return { status: 200, devices };
  } catch (error) {
    return { status: 500, error };
  }
};

module.exports.getDeviceTriggers = async function (device_id) {
  try {
    let sql = `SELECT * FROM triggers
        INNER JOIN devices_triggers ON trigger.id = devices_triggers.trigger_id
        WHERE devices_triggers.device_id = '${device_id}'`;
    let result = await pool.query(sql);
    let triggers = result.rows;
    return { status: 200, triggers };
  } catch (error) {
    return { status: 500, error };
  }
};

module.exports.getDevice = async function (device_id) {
  try {
    let sql = `SELECT * FROM devices WHERE id = '${device_id}'`;
    let result = await pool.query(sql);
    if (result.rows.length === 0) {
      return { status: 404, error: "Device not found" };
    }
    let device = result.rows[0];
    return { status: 200, device };
  } catch (error) {
    return { status: 500, error };
  }
};

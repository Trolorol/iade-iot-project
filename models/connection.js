// const { Pool } = require('pg')
//     // pools will use environment variables
//     // for connection information
// const pool = new Pool()

var pg = require("pg");

const connectionString = "postgres://admin:postgres@localhost:2345/iot-server";
const Pool = pg.Pool;
const pool = new Pool({
  connectionString,
  max: 10,
});

module.exports = pool;

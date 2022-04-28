var pool = require("./connection");

module.exports.getUser = async function (user_id) {
  try {
    let sql = `SELECT * FROM users WHERE id = '${user_id}'`;
    let result = await pool.query(sql);
    console.log(result);
    if (result.rows.length === 0) {
      return { status: 404, error: "User not found" };
    }
    return { status: 200, user: result.rows[0] };
  } catch (error) {
    return { status: 500, error };
  }
};

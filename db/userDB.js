let pgPool;

module.exports = (injectedPgPool) => {
  pgPool = injectedPgPool;

  return {
    register,
    getUser,
    isValidUser,
  };
};

var crypto = require("crypto");

function register(email, password, cbFunc) {
  var shaPass = crypto.createHash("sha256").update(password).digest("hex");

  const query = `INSERT INTO users (email, password) VALUES ('${email}', '${shaPass}')`;

  pgPool.query(query, cbFunc);
}

function getUser(email, password, cbFunc) {
  var shaPass = crypto.createHash("sha256").update(password).digest("hex");

  const getUserQuery = `SELECT * FROM users WHERE email = '${email}' AND password = '${shaPass}'`;

  pgPool.query(getUserQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}

function isValidUser(email, cbFunc) {
  const query = `SELECT * FROM users WHERE email = '${email}'`;

  const checkUsrcbFunc = (response) => {
    const isValidUser = response.results
      ? !(response.results.rowCount > 0)
      : null;

    cbFunc(response.error, isValidUser);
  };

  pgPool.query(query, checkUsrcbFunc);
}

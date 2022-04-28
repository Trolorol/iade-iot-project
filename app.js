var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
// Database imports
const pgPool = require("./db/pgWrapper");
const tokenDB = require("./db/tokenDB")(pgPool);
const userDB = require("./db/userDB")(pgPool);
// OAuth imports
const oAuthService = require("./auth/tokenService")(userDB, tokenDB);
const oAuth2Server = require("node-oauth2-server");

var app = express();

app.oauth = oAuth2Server({
  model: oAuthService,
  grants: ["password"],
  debug: true,
});

const testAPIService = require("./test/testAPIService.js");
const testAPIRoutes = require("./test/testAPIRoutes.js")(
  express.Router(),
  app,
  testAPIService
);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const devicesRouter = require("./routes/devicesRoutes");
const actionsRouter = require("./routes/actionsRoutes");

const authenticator = require("./auth/authenticator")(userDB);
const routes = require("./auth/routes")(express.Router(), app, authenticator);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(app.oauth.errorHandler());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/devices", devicesRouter);
app.use("/actions", actionsRouter);
app.use("/auth", routes);
app.use("/test", testAPIRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;

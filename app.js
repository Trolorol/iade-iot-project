var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

var app = express();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const devicesRouter = require("./routes/devicesRoutes");
const actionsRouter = require("./routes/actionsRoutes");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/devices", devicesRouter);
app.use("/actions", actionsRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRoutes");
var devicesRouter = require("./routes/devicesRoutes");
var actionsRouter = require("./routes/actionsRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/devices", devicesRouter);
app.use("/actions", actionsRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;

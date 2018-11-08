'use strict';

const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const http = require("http");
const CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

const server = http.createServer(app);

const defaultRoute = require("./app/routes/default.route.js");
const presentationRoute = require("./app/routes/presentation.route.js");

const path = require("path");


// init server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(defaultRoute);
app.use(presentationRoute);

app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));

server.listen(CONFIG.port, () => {
  console.log(`Listening on *:${CONFIG.port}`);
});
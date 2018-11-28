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
const contentRoute = require("./app/routes/content.route.js");
const loginRoute = require("./app/routes/login.route.js");

const IOController = require("./app/controllers/io.controller.js");

const path = require("path");


// init server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(defaultRoute);
app.use(presentationRoute);
app.use(contentRoute);
app.use(loginRoute);



app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));

server.listen(CONFIG.port, () => {
  console.log(`Listening on *:${CONFIG.port}`);
});

IOController.listen(server);

// io.sockets.on('connection', function (socket) {
//
//     socket.emit('message', 'Vous êtes bien connecté !');
//
// });
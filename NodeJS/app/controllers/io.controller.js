'use strict';


let contentModel = require("../models/content.model");

const fs = require('fs');
const CONFIG = JSON.parse(process.env.CONFIG);
const path = require("path");


class IoController {

  static listen(httpServer) {
    let socketMap = {};
    let io = require('socket.io')(httpServer);


    let presJson;
    let arraySild;
    let nbSlide;
    let currentSlideIndex;

    io.sockets.on('connection', function (socket) {
      console.log('Un client est connecté !');

      if(nbSlide) {
        let idContent = arraySild[currentSlideIndex].contentMap['1'];
        contentModel.read(idContent, (err, data) => {
          if (err) {
            console.error(err.message);
          }
          else {
            io.sockets.emit("sendSlideToClient", data);
          }
        });
      }

      socket.on("data_comm", function (data) {
        socketMap[data.id] = socket;
        socket.on("slidEvent", function (dataJson) {
          console.log('slidevent reçue!', dataJson);


          if (dataJson.CMD === 'START') {
            fs.readFile(path.join(CONFIG.presentationDirectory, dataJson.PRES_ID + '.pres.json'), (err, dataPres) => {
              if (err) {
                console.log(err.message);
              }
              else {
                presJson = JSON.parse(dataPres.toString());
                arraySild = presJson.slidArray;
                nbSlide = arraySild.length;
                currentSlideIndex = 0;
                let idContent = arraySild[0].contentMap['1'];
                contentModel.read(idContent, (err, data) => {
                  if (err) {
                    console.error(err.message);
                  }
                  else {
                    io.sockets.emit("sendSlideToClient", data);
                  }
                });

              }
            });
          }
          if (dataJson.CMD === 'PAUSE') {
            presJson = null;
            arraySild = null;
            nbSlide = null;
            currentSlideIndex = 0;
            io.sockets.emit("sendSlideToClient", null);
          }
          if (dataJson.CMD === 'END' && nbSlide) {
            currentSlideIndex = nbSlide - 1;
            let idContent = arraySild[nbSlide - 1].contentMap['1'];
            contentModel.read(idContent, (err, data) => {
              if (err) {
                console.error(err.message);
              }
              else {
                io.sockets.emit("sendSlideToClient", data);
              }
            });
          }
          if (dataJson.CMD === 'BEGIN' && nbSlide) {
            currentSlideIndex = 0;

            let idContent = arraySild[0].contentMap['1'];
            contentModel.read(idContent, (err, data) => {
              if (err) {
                console.error(err.message);
              }
              else {
                io.sockets.emit("sendSlideToClient", data);
              }
            });
          }
          if (dataJson.CMD === 'PREV' && nbSlide) {

            let idSlide;
            if (currentSlideIndex === 0) {
              idSlide = nbSlide - 1;
            } else {
              idSlide = (currentSlideIndex % nbSlide) - 1;
            }

            currentSlideIndex = idSlide;

            let idContent = arraySild[idSlide].contentMap['1'];
            contentModel.read(idContent, (err, data) => {
              if (err) {
                console.error(err.message);
              }
              else {
                io.sockets.emit("sendSlideToClient", data);
              }
            });

          }
          if (dataJson.CMD === 'NEXT' && nbSlide) {
            let idSlide;

            if (currentSlideIndex === nbSlide - 1) {
              idSlide = currentSlideIndex % (nbSlide - 1);
            } else {
              idSlide = (currentSlideIndex % nbSlide) + 1;
            }
            currentSlideIndex = idSlide;
            let idContent = arraySild[idSlide].contentMap['1'];
            contentModel.read(idContent, (err, data) => {
              if (err) {
                console.error(err.message);
              }
              else {
                io.sockets.emit("sendSlideToClient", data);
              }
            });

          }
        });
      });
      socket.emit("connection");
    });
  }
}

module.exports = IoController;
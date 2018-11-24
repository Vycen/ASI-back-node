'use strict';


var contentModel = require("../models/content.model");

const fs = require('fs');
const CONFIG = JSON.parse(process.env.CONFIG);
const path = require("path");


class IoController {

    static listen(httpServer){
        var socketMap = {};
        var io= require('socket.io')(httpServer);
        io.sockets.on('connection', function (socket) {
            console.log('Un client est connecté !');
            socket.on("data_comm",function (data) {
                socketMap[data.id]=socket;
                socket.on("slidEvent",function (dataJson) {
                    console.log('slidevent reçue!');
                    fs.readFile(path.join(CONFIG.presentationDirectory, dataJson.PRES_ID + '.pres.json'), (err, dataPres) => {
                        if (err) {
                            console.log(err.message);
                        }
                        else {
                            let presJson = JSON.parse(dataPres.toString());
                            let arraySild = presJson.slidArray;
                            let nbSlide= arraySild.length;
                            if(dataJson.CMD=='START'){
                                let idContent= arraySild[0].contentMap['1'] ;
                                contentModel.read(idContent,(err, data) => {
                                    if(err){
                                        console.error(err.message);
                                    }
                                    else{
                                        socket.emit("sendSlideToClient",data);
                                    }
                                });
                            }
                            if(dataJson.CMD=='END'){
                                let idContent= arraySild[nbSlide-1].contentMap['1'] ;
                                contentModel.read(idContent,(err, data) => {
                                    if(err){
                                        console.error(err.message);
                                    }
                                    else{
                                        socket.emit("sendSlideToClient",data);
                                    }
                                });
                                //socket.emit("sendSlideToClient",arraySild[nbSlide-1]);
                            }
                            if(dataJson.CMD=='BEGIN'){
                                let idContent= arraySild[nbSlide%nbSlide].contentMap['1'] ;
                                contentModel.read(idContent,(err, data) => {
                                    if(err){
                                        console.error(err.message);
                                    }
                                    else{
                                        socket.emit("sendSlideToClient",data);
                                    }
                                });
                                //socket.emit("sendSlideToClient",arraySild[nbSlide%nbSlide]);
                            }
                            if(dataJson.CMD=='PREV'){
                                for(var slide in arraySild)
                                {
                                    if(arraySild[slide]['id']===dataJson.ID_SLIDE){
                                        //console.log((slide%nbSlide));
                                        let idSlide;
                                        if(slide==0){
                                            idSlide=nbSlide-1;
                                        }else{
                                            idSlide=(slide%nbSlide)-1;
                                        }
                                        let idContent= arraySild[idSlide].contentMap['1'] ;
                                        contentModel.read(idContent,(err, data) => {
                                            if(err){
                                                console.error(err.message);
                                            }
                                            else{
                                                socket.emit("sendSlideToClient",data);
                                            }
                                        });
                                        //socket.emit("sendSlideToClient",arraySild[idSlide]);
                                    }
                                }
                            }
                            if(dataJson.CMD=='NEXT'){
                                for(var slide in arraySild)
                                {
                                    if(arraySild[slide]['id']===dataJson.ID_SLIDE){
                                        let idSlide;

                                        if(slide==nbSlide-1){
                                            idSlide = slide%(nbSlide-1);
                                        }else{
                                            idSlide=(slide%nbSlide)+1;
                                        }
                                        let idContent= arraySild[idSlide].contentMap['1'] ;
                                        contentModel.read(idContent,(err, data) => {
                                            if(err){
                                                console.error(err.message);
                                            }
                                            else{
                                                socket.emit("sendSlideToClient",data);
                                            }
                                        });
                                        // socket.emit("sendSlideToClient",arraySild[idSlide]);
                                    }
                                }
                            }

                        }
                    });
                });
            });
            socket.emit("connection");
        });
    }
}
module.exports = IoController;
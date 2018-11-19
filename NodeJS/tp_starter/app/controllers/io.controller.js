'use strict';

const io = require('socket.io');

class IoController {

    static listen(server){
        console.log("hello");

        // io.on('connection', function(socket){
        //     console.log('a user connected');
        //     socket.on('connection', function(){
        //         console.log('connection');
        //     });
        //     socket.on('data_comm', function(){
        //         console.log('data_comm');
        //     });
        //     socket.on('slidEvent', function(){
        //         console.log('slidEvent');
        //     });
        //
        // });

    }
}

module.exports = IoController;
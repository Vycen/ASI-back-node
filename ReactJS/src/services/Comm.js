let io = require('socket.io-client');
let axios = require('axios');

export default class Comm {
  constructor() {
    this.comm = {};
    this.comm.io = {};
    this.socket = "";
    this.instance = axios.create();
    this.emitOnConnect = this.emitOnConnect.bind(this);

  }

  toString() {
    return '';
  }

  loadPres(presId, callback, callbackErr) {
    this.instance.get('/loadPres')
      .then(function (data) {
        let size = Object.keys(data.data).length;
        console.log("raw data");
        console.log(data.data);
        let loadedPres = "";
        if (size > 0) {
          console.log("key");
          console.log(presId);
          console.log("data");
          console.log(data.data[presId]);
          loadedPres = data.data[presId];
        }
        callback(loadedPres);
      })
      .catch(function (error) {
        callbackErr(error);
      });

  }

  loadContent(callback, callbackErr) {
    this.instance.get('/contents')
      .then(function (data) {
        //console.log("raw content data");
        //console.log(data.data);
        let size = Object.keys(data.data).length;
        let contentMap = {};
        for (let i = 0; i < size; i++) {
          let c_obj = data.data[Object.keys(data.data)[i]];
          contentMap[c_obj.id] = c_obj;
          // console.log(c_obj);
        }

        callback(contentMap);
      })
      .catch(function (error) {
        callbackErr(error);
      });

  }

  savPres(presJson, callbackErr) {
    this.instance.post('/savePres', presJson)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        callbackErr(error);
      });
  }

  savContent(contentJson, callback, callbackErr) {
    this.instance.post('/contents', contentJson)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        callbackErr(error);
      });
  }

  fileUpload(fileC, callback, callbackErr) {
    let data = new FormData();
    data.append('file', fileC);
    this.instance.post('/file-upload', data)
      .then(function (response) {
        console.log(response);
        callback();
      })
      .catch(function (error) {
        callbackErr(error);
      });

  }

  emitOnConnect(message) {
    console.log("message");
    console.log("socket");
    console.log(this.socket);
    console.log("this.comm.io.uuid");
    console.log(this.comm.io.uuid);
    this.socket.emit('data_comm', {'id': this.comm.io.uuid}, function (test) {
      console.log(test);
    });
  }

  socketConnection(uuid) {
    this.socket = io.connect(process.env.SOCKET_URL);
    this.comm.io.uuid = uuid;
    this.socket.on('connection', message => {
      this.emitOnConnect(message)
    });

    this.socket.on('newPres', function (socket) {

    });
    this.socket.on('slidEvent', function (socket) {

    });
  }

  backward() {
    this.socket.emit('slidEvent', {'CMD': "PREV"});
  }

  forward() {
    this.socket.emit('slidEvent', {'CMD': "NEXT"});
  }

  play(presUUID) {
    this.socket.emit('slidEvent', {'CMD': "START", 'PRES_ID': presUUID});
  }

  pause() {
    this.socket.emit('slidEvent', {'CMD': "PAUSE"});
  }

  begin() {
    this.socket.emit('slidEvent', {'CMD': "BEGIN"});
  }

  end() {
    this.socket.emit('slidEvent', {'CMD': "END"});
  }

}

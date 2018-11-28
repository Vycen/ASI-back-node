'use strict';

const express = require("express");
const router = express.Router();

router.route('/')
  .get((request, response) => {
    //response.send("It Works !")
      response.sendFile("/home/cpe/Documents/tp_nodejs/ASI-back-node/NodeJS/tp_starter/app/routes/testSocket.html");
  });


  /*
  .post(function(request, response){

  })
  .put(function(request, response){

  })
  .delete(function(request, response){

  })
  .all(function(request, response){

  });
  */


module.exports = router;
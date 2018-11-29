'use strict';

const express = require("express");
const router = express.Router();
const path = require('path');
const appDir = path.dirname(require.main.filename);

router.route('/')
  .get((request, response) => {
    //response.send("It Works !")
      response.sendFile(path.join(appDir, '/public/login/index.html'));
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
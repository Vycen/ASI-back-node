'use strict';

const express = require("express");
const router = express.Router();

router.route('/')
  .get((request, response) => {
    response.send("It Works !")
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
'use strict';

const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const http = require("http");

const CONFIG = JSON.parse(process.env.CONFIG);


router.route('/login')
  .post((request, response) => {
    const options = {
      hostname: 'localhost',
      port: 8080,
      path: '/FrontAuthWatcherWebService/rest/WatcherAuth',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    let authResponse = '';

    const req = http.request(options, (res) => {

      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        authResponse += chunk;
        console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        response.json(JSON.parse(authResponse));
      });
    });

    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
      response.json(e);
    });

    // write data to request body
    req.write(JSON.stringify(request.body));
    req.end()
  });

module.exports = router;
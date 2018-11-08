'use strict';

const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');

const CONFIG = JSON.parse(process.env.CONFIG);


router.route('/loadPres')
  .get((request, response) => {
    fs.readdir(CONFIG.presentationDirectory, (err, list) => {
      let result = {};
      let count = list.length;
      list.forEach((file) => {
        count--;
        if(path.extname(file) === '.json') {
          fs.readFile(CONFIG.presentationDirectory + '/' + file, (err, data) => {
            if(err) {
              response.json(err);
            }
            else {
              let json = JSON.parse(data.toString());
              result[json.id] = json;
            }
            if(count === 0) {
              response.json(result);
            }
          });

        }
      });
    });
  });

router.route('/savePres')
  .post((request, response) => {
    let pres = request.body;
    fs.writeFile(CONFIG.presentationDirectory + '/' + pres.id + '.pres.json', JSON.stringify(pres), (err) => {
      if(err) {
        response.json(err);
      }
      else {
        response.json(pres);
      }
    });
  });

module.exports = router;
'use strict';
var contentModel = require("../models/content.model");
const fs = require('fs');
const path = require('path');
const util = require('../utils/utils');

const CONFIG = JSON.parse(process.env.CONFIG);

class Contentcontroller {

    static  list(req,res) {
        fs.readdir(CONFIG.presentationDirectory, (err, list) => {
            let result = {};
            let listFichier = [];
            list.forEach((file) => {

                if(path.extname(file) === '.json') {
                    listFichier.push(file);
                }
            });
            listFichier.forEach((file) => {
                fs.readFile(CONFIG.presentationDirectory + '/' + file, (err, data) => {
                    if(err) {
                        res.json(err);
                    }
                    else {
                        let json = JSON.parse(data.toString());
                        result[json.id] = json;
                    }
                    if(listFichier.length === Object.keys(result).length) {
                        console.log(result);
                        res.json(result);
                    }
                });
            });
        });
    }


    static  read(req,res) {
        let id = req.params.id;
        let boolJSON = req.param('json');
        contentModel.read(id,(err, data) => {
            if(err){
              console.error(err);
              res.status(500).end(err.message);
            }
            if(boolJSON !== 'true'){
                if(data.fileName === null){
                    res.redirect(data.src);
                }else{
                    console.log('renvoi de fichier');
                    res.sendFile(util.getDataFilePath (data.fileName));
                }
            }else{
                res.json(data);
            }
        });
    }

    static  create(req,res) {
        let contentInstance = new  contentModel(req.body);
        contentModel.create(contentInstance,(err, data) => {
            res.json(data);
        });
    }

}

module.exports = Contentcontroller;
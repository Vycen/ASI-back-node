'use strict';
const fs = require('fs');
const util = require('../utils/utils');

const CONFIG = JSON.parse(process.env.CONFIG);

class ContentModel {

  constructor({type,id,title,src,fileName}={}) {
    let  data;
    this.type = type;
    this.id = id;
    this.title = title;
    this.src = src;
    this.fileName = fileName;
    this.getData=function() {
        return data;
    }
    this.setData=function(value) {
        data = value;
    }
  }


  static create(content, file, callback) {
    if(!(content instanceof ContentModel)) {
      return callback(new Error("Not a ContentModel"));
    }

    if(!content.id) {
       return callback(new Error("ID is null"));
    }

    fs.writeFile(CONFIG.contentDirectory + '/' + content.id + ".meta.json", JSON.stringify(content), (err) => {
      if(err) {
        return callback(err);
      }
      if(content.type !== 'img') {

          return callback(null,content);
      }
      var buf = new Buffer(file, 'base64');
      fs.writeFile(CONFIG.contentDirectory + '/' + content.fileName, buf, (err) => {
        if (err) {
          return callback(err);
        }
        else {
          return callback(null,content);
        }
      });
    });
  }

  static read(id, callback) {

    fs.readFile(util.getMetaFilePath(id) , (err, data) => {

      if(err) {
          return callback(err, null);
      }
      else {
        let json = JSON.parse(data.toString());
        let content = new ContentModel(json);
        if(content.fileName !== null) {
            fs.readFile(CONFIG.contentDirectory + '/' + content.fileName, (err, data) => {
                if (err) {
                    return callback(err, null);
                }
                else {
                    content.setData(data.toString());
                    return callback(null, content);
                }
            });
        }else{
            return callback(null, content);
        }
      }
    });
  }

  static update(content, callback) {
    if(content instanceof ContentModel) {
      if(content.id) {
        this.read(content.id, (err, existingContent) => {
          if(err) {
            callback(err);
          }
          else {
            fs.writeFile(CONFIG.contentDirectory + '/' + content.id + ".meta.json", JSON.stringify(content), (err) => {
              if (err) {
                callback(err);
              }
              else if (content.type === 'img' && content.getData() && content.getData().length > 0) {
                fs.writeFile(CONFIG.contentDirectory + '/' + content.fileName, content.getData(), (err) => {
                  if (err) {
                    callback(err);
                  }
                  else {
                    callback();
                  }
                });
              }
              else {
                callback();
              }
            });
          }
        });
      }
      else {
        callback(new Error("ID is null"));
      }
    }
    else {
      callback(new Error("Not a ContentModel"));
    }
  }

  static delete(id, callback) {
    this.read(id, (err, content) => {
      if(err) {
        callback(err);
      }
      else {
        fs.unlink(CONFIG.contentDirectory + '/' + content.id + ".meta.json", (err) => {
          if(err) {
            callback(err);
          }
          else if (content.type === 'img' && content.getData() && content.getData().length > 0) {
            fs.unlink(CONFIG.contentDirectory + '/' + content.fileName, (err) => {
              if (err) {
                callback(err);
              }
              else {
                callback();
              }
            });
          }
          else {
            callback();
          }
        });
      }
    });
  }
}

module.exports = ContentModel;
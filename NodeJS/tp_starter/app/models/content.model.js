const fs = require('fs');

const CONFIG = JSON.parse(process.env.CONFIG);

class ContentModel {

  constructor(content) {
    if(content) {
      this.type = content.type;
      this.id = content.id;
      this.title = content.title;
      this.src = content.src;
      this.fileName = content.fileName;
    }
  }

  getData() {
    return this.data;
  }

  setData(value) {
    this.data = value;
  }

  static create(content, callback) {
    if(content instanceof ContentModel) {
      if(content.id) {
        fs.writeFile(CONFIG.contentDirectory + '/' + content.id + ".meta.json", JSON.stringify(content), (err) => {
          if(err) {
            callback(err);
          }
          else {
            if(content.type === 'img') {
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

  static read(id, callback) {
    fs.readFile(CONFIG.contentDirectory + '/' + id + ".meta.json", (err, data) => {
      if(err) {
        callback(err, null);
      }
      else {
        let json = JSON.parse(data.toString());
        let content = new ContentModel(json);
        fs.readFile(CONFIG.contentDirectory + '/' + content.fileName, (err, data) => {
          if (err) {
            callback(err, null);
          }
          else {
            content.setData(data.toString());
            callback(null, content);
          }
        });

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
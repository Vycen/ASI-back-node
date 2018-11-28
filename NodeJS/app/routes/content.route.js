'use strict';

var multer = require("multer");
var express = require("express");

var contentController = require('./../controllers/content.controller');

var router = express.Router();
module.exports = router;

var multerMiddleware = multer({ "dest": "/tmp/" });


router.route('/contents').get(multerMiddleware.single("file"),contentController.list);
router.route('/contents/:id').get(multerMiddleware.single("file"),contentController.read);
router.route('/contents').post(multerMiddleware.single("file"),contentController.create);

/**
 * Multer ajoute à l'objet `request` la propriété `file` qui contient plusieurs informations comme:
 *  - request.file.path : le chemin d'acces du fichier sur le serveur
 *  - request.file.originalname : le nom original du fichier
 *  - request.file.mimetype : le type mime
 *  - ...
 */

module.exports = router;
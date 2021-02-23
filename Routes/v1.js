const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


module.exports = function(app){
    var controller = require('../controllers/controller')

    app.route('/')
        .get(controller.index);
}






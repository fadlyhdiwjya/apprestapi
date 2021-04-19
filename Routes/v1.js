const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


module.exports = function(app){
    var controller = require('../controllers/controller')

    app.route('/')
        .get(controller.index);

    app.route('/students/:id')
        .get(controller.getStudentsById);

    app.route('/students/add-students')
        .post(controller.addStudents);

    app.route('/students/edit/:id')
        .put(controller.editStudents);

    app.route('/students/delete/:id')
        .delete(controller.deleteStudents);
}






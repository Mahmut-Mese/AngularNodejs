/* var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var taskController = require('./controller/taskController');
var port = 5000;
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/tasks', tasks);
app.listen(port, function() {
    console.log('listening ', +port)

});
app.use('/tasks', taskController); */
const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
const taskController = require('./controller/taskController.js')
var port = 5000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', index);
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4200' }))
app.listen(port, function() {
    console.log('listening ', +port)

});
const { mongoose } = require('./db.js');
app.use('/tasks', taskController);
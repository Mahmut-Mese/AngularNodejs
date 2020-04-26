 const express = require('express');
 var router = express.Router();
 var mongojs = require('mongojs');
 var { Task } = require('../models/task');
 var db = mongojs('mongodb://localhost:27017/app2016');
 router.get('/', (req, res, next) => {
     db.tasks.find((err, tasks) => {
         if (err) { res.send(err); } else { res.json(tasks) }
     });
 });
 router.get('/:id', (req, res, next) => {
     db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, task) {
         if (err) { res.send(err); } else { res.json(task) }
     });
 });
 router.post('/', (req, res, next) => {
     var task = new Task({
         title: req.body.title,
         isDone: req.body.isDone
     })
     db.tasks.save(task, function(err, task) {
         if (err) {
             res.send(err)
         } else {
             res.json(task)
         }
     })
 })

 router.delete('/:id', (req, res) => {
     console.log("aaa");

     db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, task) {

         if (err) {

             res.send(err);
         } else {

             res.json(task)
         }
     });
 });

 router.put('/:id', (req, res, next) => {

     var task = req.body;
     var updTask = {};
     if (task.isDone) {
         updTask.isDone = task.isDone
     }
     if (task.title) {
         updTask.title = task.title
     }


     db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, { $set: updTask }, { new: true }, function(err, task) {
         if (err) {
             console.log(err);
             res.send(err);
         } else {

             res.json(task)
         }
     });
 });




 module.exports = router;
const mongoose = require('mongoose');
require('../models/task.js');
const Task = mongoose.model('Task');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, tasks) {
            if(err){
                console.log('Error getting all tasks', err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: tasks});
            }
        });
    },
    info: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task) {
            if(err){
                console.log('Error getting the task', err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: task});
            }
        });
    },
    insert: function(req, res){
        var task = new Task({title: req.body.title, 
            description: req.body.description, completed: req.body.completed});
        task.save(function(err) {
            if(err){
                console.log('Error adding task', err);
                res.json({message: "Error adding task", error: err});
            } else {
                res.json({message: "Success", data: task});
            }
        });
    },
    update: function(req, res){
        Task.updateOne({_id: req.params.id}, {$set: {title: req.body.title, 
        description: req.body.description, completed: req.body.completed}}, function(err){
                if(err){
                    console.log('Error updating task', err);
                    res.json({message: "Error updating task", error: err});
                } else {
                    res.json({message: "Success"});
                }
            });
    },
    delete: function(req, res){
        Task.deleteOne({_id: req.params.id}, function(err){
            if (err) {
                console.log('Error deleting task', err);
                res.json({message: "Error deleting task", error: err})
            } else {
                res.json({message: "Success"})
            }
        });
    },
}
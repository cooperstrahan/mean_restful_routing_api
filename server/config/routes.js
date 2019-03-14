const tasks = require('../controller/tasks.js');

module.exports = function(app){
    app.get('/tasks', function(req, res){ tasks.index(req, res)});
    app.get('/tasks/:id', function(req, res){ tasks.info(req, res)});
    app.post('/tasks', function(req, res){ tasks.insert(req, res)});
    app.put('/tasks/:id', function(req, res){ tasks.update(req, res)});
    app.delete('/tasks/:id', function(req, res){ tasks.delete(req, res)});
}
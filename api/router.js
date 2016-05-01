var mongoose = require('mongoose');
var bodyParser  = require('body-parser');


module.exports = function(app){

    app.get('/api/todos', function(req, res){

        var Todo = mongoose.model('Todo');

        Todo.find(function(err, docs){

            if(!err){
                res.send(docs);
            } else {
                res.send(err);
            }

        });

    });

    app.post('/api/todo', function(req, res){

        var Todo = mongoose.model('Todo');

        console.log(req.body);

        var todo = new Todo(req.body);

        todo.save(function(err){

            if(!err){
                res.send(todo);
            }else{
                res.sendStatus(400);
            }

        });

    });
    app.delete('/api/todo/:id', function(req, res){

        var Todo = mongoose.model('Todo');

        Todo.findByIdAndRemove(req.params.id, function(err, doc){

            if(!err){
                res.sendStatus(200);
            }else{
                res.sendStatus(400);
            }

        });

    });
    app.put('/api/todo/:id', function(req, res){

        var Todo = mongoose.model('Todo');

        Todo.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, doc){

            if(!err){
                res.send(doc);
            }else{
                console.log(req.body);
                console.log(err);
            }

        });

    });

};


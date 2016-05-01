var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

var database    = require('./database');
var router      = require('./router');

var PORT = 3000;

GLOBAL.APP = app;

// Initialization of our server

function start(){

    // middlewares for processing the request
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(allowCrossDomain);

    database.openDatabase(function(){

        setupModels();

        app.listen(PORT, function(){

            // routes for our API
            router(app);
            console.log('Server running on http://localhost:'+PORT)

        });

    });

}

function setupModels(){

    require('./models/todo');

}

//CORS middleware
var allowCrossDomain = function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

}

start();

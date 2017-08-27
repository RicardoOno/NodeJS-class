/**
  Created by ricardo on 17/08/2017.
 **/
//Middlewares

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

console.log('=====> Modulo Express sendo carregado <=====');


module.exports = function () {
    var app = express();
    app.set('view engine', 'ejs'); //metodo de view
    app.set('views', './app/views/');
        //use -> uma função que vai entrar no fluxo de execução do express
    app.use(express.static('./app/public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    /*
    * exemp:
    * req para o express -> function -> function -> function -> rota
    * req para o express -> function -> function -> function -> use -> rota
    * */

    load('routes', {cwd: 'app'}) //carregar tudo que esta na pasta route
        .then('infra')
        .into(app);

    app.use(function (req, res, next) { //erro de url
        res.status(404).render('erros/404');
        next();
    });
    app.use(function (error, req, res, next) {
        if( process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }
       next(error);
    });

        //var express = require('express');
        //var app = express();
        //app.set('view engine', 'ejs'); //metodo de view
    return app;
};
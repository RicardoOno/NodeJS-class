/**
  Created by ricardo on 17/08/2017.
 **/
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.set('view engine', 'ejs'); //metodo de view
    app.set('views', './app/views/');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());



    load('routes', {cwd: 'app'}) //carregar tudo que esta na pasta route
        .then('infra')
        .into(app);

    console.log('=====> Modulo sendo carregado <=====');
        //var express = require('express');
        //var app = express();
        //app.set('view engine', 'ejs'); //metodo de view
    return app;
};
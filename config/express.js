/**
  Created by ricardo on 17/08/2017.
 **/
var express = require('express');
var load = require('express-load');

module.exports = function () {
    var app = express();
    app.set('view engine', 'ejs'); //metodo de view
    app.set('views', './app/views/');

    load('routes', {cwd: 'app'}) //carregar tudo que esta na pasta route
        .then('infra')
        .into(app);

    console.log('=====> Modulo sendo carregado <=====');
        //var express = require('express');
        //var app = express();
        //app.set('view engine', 'ejs'); //metodo de view
    return app;
};
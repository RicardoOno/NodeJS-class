/**
 * Created by ricardo on 17/08/2017.
 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs'); //metodo de view

module.exports = function() {
    console.log('=====> Modulo sendo carregado <=====');
    //var express = require('express');
    //var app = express();
    //app.set('view engine', 'ejs'); //metodo de view
    return app;
}
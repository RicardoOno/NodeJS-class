/**
  Created by ricardo on 13/08/2017.
 **/
//var app = express(); //invocou o express
var app = require('./config/express')(); //para mutiplos requisições
//var ip = '192.168.0.101';
    //var dentro do express
    //app.set('view engine', 'ejs'); -> esta no express.js
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, function() {
    console.log("servidor rodando");
});
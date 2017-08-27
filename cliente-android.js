/**
 * Created by ricar on 20/08/2017.
 */
//para test

var http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
                //text/html -> default
        'Accept':'application/json'
    }
};

http.get(configuracoes, function(res) {
   console.log(res.statusCode);
    res.on('data', function(body) {
     console.log('Corpo' + body);
   });
});
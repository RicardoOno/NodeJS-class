/**
 * Created by ricar on 20/08/2017.
 */
//para test

var http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        //text/html -> default
        'Accept':'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(configuracoes, function(res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('Corpo' + body);
    });
    if(res.statusCode == 400) {
        console.log('Deu erro');
    }
});

// Cadastra automaticamente

/*var produto = {

    titulo: '',
    descricao: 'node, js e um pouco sobre http',
    preco: 100
};

client.end(JSON.stringify(produto));
 */
/**
 * Created by ricardo on 19/08/2017.
 */
//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
    var listaProdutos = function (req, res) { //primeira rota
        console.log('Conectando...');
                        //express load faz isso para buscar o objeto
        var connection = app.infra.connectionFactory();
        //var connection =  connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //consulta
        produtosDAO.lista(function(err, results){
            res.format({ //identificar qual o formato a ser enviado
                html: function () {
                    res.render('produtos/lista',{lista:results});
                },
                json: function () {
                    res.json(results);
                }
            });
            //res.send(results);
            res.render('produtos/lista', {lista:results});
        });
        connection.end(); //fecha conexão
    };
    app.get('/produtos', listaProdutos);

    app.get('/produtos/json', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function (err, results) {
            res.json(results);
        });
        connection.end(); //fecha conexão
    });

    // get para produtos -> listar
    app.get('/produtos/form', function (req, res) {
        console.log('======> Cheguei no form de produtos <======');
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
    //post para produtos -> criar
        var produto = req.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function (err, results) {
            console.log(err);
            res.redirect('/produtos'); //redireciona para outro lu
        });
    });

    app.get('/produtos/deletar/:id', function (req, res) {
        console.log('=====> Função de deletar chamada <=====');
       var id = req.params.id;id = id.replace(':','');
       var connection = app.infra.connectionFactory();
       var produtosDAO = new app.infra.ProdutosDAO(connection);

       produtosDAO.deleta(id, function (err, results) {
          res.redirect('/produtos');
       });
        connection.end(); //fecha conexão
        console.log('=====> Conexão fechada <=====');
    });
};

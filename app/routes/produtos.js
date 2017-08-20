/**
 * Created by ricardo on 19/08/2017.
 */
//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
    app.get('/produtos', function (req, res) { //primeira rota
        console.log('Conectando...');
                        //express load faz isso para buscar o objeto
        var connection = app.infra.connectionFactory();
        //var connection =  connectionFactory();

        var produtosBanco = new app.infra.ProdutosDAO(connection);

        //consulta
        produtosBanco.lista(function(err, results){
            //res.send(results);
            res.render('produtos/lista', {lista:results});
        });

        connection.end(); //fecha conexão
    });

    app.get('produtos/remove', function () {
        var produto = produtosBanco.carrega(id, callback);
        if (produto) {
            produtosBanco.remove(produto, callback);
        }
    })

};

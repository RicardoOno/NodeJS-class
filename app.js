/**
 * Created by tadashi on 13/08/2017.
 */
var app = require('./config/express')(); //para mutiplos requisições
//var app = express(); //invocou o express

    //var dentro do express
app.set('view engine', 'ejs');

app.get('/produtos', function (req, res) { //primeira rota
    console.log('Conectando...');
    res.render("produtos/lista");
});

app.listen(3000, function () { //subir o serrvidor
    console.log('servidor rodando');
});

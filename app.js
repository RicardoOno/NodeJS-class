/**
  Created by ricardo on 13/08/2017.
 **/
//var app = express(); //invocou o express
var app = require('./config/express')(); //para mutiplos requisições
    //var dentro do express
    //app.set('view engine', 'ejs'); -> esta no express.js
app.listen(3000, function () { //subir o serrvidor
    console.log('servidor rodando');
});

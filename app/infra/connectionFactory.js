/**
 * Created by ricardo on 19/08/2017.
 */
var mysql = require('mysql');
function createDBConnection () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'nodejs_db'
    });
}

//wrapper = embrulhar uma função, assim o createDBConnection so vai ser chamado qunado necessário.
module.exports = function () {
  return createDBConnection;
};
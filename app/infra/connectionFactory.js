/**
 * Created by ricardo on 19/08/2017.
 */
var mysql = require('mysql');
function createDBConnection () {
    if (!process.env.NODE_ENV || process.env.node === 'dev') {
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'usbw',
            database: 'nodejs_db'
        });
    }

    if (process.env.NODE_ENV === 'test') {
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'usbw',
            database: 'nodejs_db'
        });
    }
}

//wrapper = embrulhar uma função, assim o createDBConnection so vai ser chamado qunado necessário.
module.exports = function () {
  return createDBConnection;
};

/*
* module vem de onde? =
*
* */
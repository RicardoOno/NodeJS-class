/**
 * Created by ricardo on 19/08/2017.
 */
function ProdutosDAO(connection) {
    this._connection = connection;
};
// '_' -> demonstrar que é privado
ProdutosDAO.prototype.lista = function (callback) {
    /* Pq o callback?
    query();
    //libera o processador
    //query ficou pronta?
    var resultado - retorno da query
    var results = this._connection.query('select * from livros');
    */
    this._connection.query('select * from livros', callback);
};
ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into livros set ?', produto, callback);
    //this._connection.query('insert into livros (titulo, descricao, preco) values (?, ?, ?)');
};
ProdutosDAO.prototype.deleta = function (id, callback) {
    this._connection.query('delete from livros where ' + id, callback);
};

module.exports = function () {
    return ProdutosDAO;
};
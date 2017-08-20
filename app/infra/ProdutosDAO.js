/**
 * Created by ricardo on 19/08/2017.
 */
function ProdutosDAO(connection) {
    this._connection = connection;
};
// '_' -> demonstrar que é privado
ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from livros', callback);
};

module.exports = function () {
    return ProdutosDAO;
};
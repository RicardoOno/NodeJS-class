function  require(path) {
    var codigoDoSeuModulo = carregado(path);
    var funcaoDeCarregamento = function () {
        //string ou texto pra codigo js
        eval(codigoDoSeuModulo);
    };
    //objeto literal
    var module = {
        exports : {}
    };
    funcaoDeCarregamento(module, module.exports);
    return module;
}
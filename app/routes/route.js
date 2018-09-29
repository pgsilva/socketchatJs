module.exports = function (app) {
    var api = app.api.apiSocket;

    //config de rotas
    app.get('/api/', api.teste);

};

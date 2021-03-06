var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
//configuracoes express js

app.use(express.static('./public')); //liberando uma pasta para ser acessivel ao navegador
app.use(bodyParser.json());

consign({ cwd: 'app' })
        .include('api')
        .then('routes')
        .into(app);//libera a pasta route pra ser carregado pelo express
/*
 * DEPLOY
 * 
 * */
app.listen(process.env.PORT || 3000);

module.exports = app;

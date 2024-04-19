exports.primeironome = "meu primeiro nome";

exports.ultimonome = "sobrenome";

exports.rgm = "numero";









var http = require("http");



var info = require('./exercicio002');



http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });





  //res.write("vai chamar outro modulo ou biblioteca customizada");



  res.write("chamada: " + primeironome + "=>" + info.primeironome);

  res.write("chamada: " + ultimonome + "=>" + info.ultimonome);

  res.write("chamada: " + rgm + "=>" + info.rgm);

   

   

  res.end();





}).listen(8081);
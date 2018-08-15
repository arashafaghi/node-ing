
var http = require('http');
var dt = require('./module');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(req.url);
  res.end('Hello World\n : '+ dt.myDateTime());
}).listen(3000);
console.log('Server running at http://localhost:3000/');

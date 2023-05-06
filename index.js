const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  let filename;

  if (q.pathname === "/") {
    filename = "./index.html";
  } else {
    filename = "./" + q.pathname + ".html";
  }

  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})

server.listen(3000);
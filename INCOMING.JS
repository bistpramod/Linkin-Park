const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
  // 'req' is an IncomingMessage object
  console.log(`Received ${req.method} request for ${req.url}`);
  res.end('Hello World');
});

server.listen(8080);
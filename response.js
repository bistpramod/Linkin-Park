const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // 'res' is the ServerResponse object
 console.log("rew req")
 res.end("hello from the server")

});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8080/');
}); 
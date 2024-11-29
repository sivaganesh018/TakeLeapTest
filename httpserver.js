const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const responseObject = {
    message: 'Hello, world!',
    status: 'success',
    timestamp: new Date().toISOString()
  };

  res.end(JSON.stringify(responseObject));
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

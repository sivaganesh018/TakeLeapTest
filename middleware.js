const express = require('express');
const app = express();
const PORT = 3000;

function logRequestDetails(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); 
}

app.use(logRequestDetails);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

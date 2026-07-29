const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? 'home.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath);
  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Create a web server that listens on port 3000 and returns the comments data as JSON.

const http = require('http');
const comments = require('./comments.json');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run the server using node comments.js and visit http://localhost:3000 in your browser. You should see the comments data displayed as JSON.

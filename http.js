const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers');
        res.write('How are you');
        res.end();
    } else if (req.url === '/about') {
        res.write('About us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(5000);
console.log('listening on port 5000');

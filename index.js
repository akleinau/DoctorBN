const http = require('node:http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', 'utf8', function(err, data) {

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.writeHead(200, {'Content-Type': 'text/html'});     
        res.write(data)
        res.end();
    });

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });

});
const http = require('node:http');
let fs = require('fs');

fs.readFile('index.html', 'utf8', function(err, data) {

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.writeHead(200, {'Content-Type': 'text/html'});     
        res.write(data)
        res.end();
    }).listen(process.env.PORT || 3000);

});
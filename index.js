const http = require('node:http');
let fs = require('fs');

fs.readFile('index.html', 'utf8', function(err, data) {

    const server = http.createServer((req, res) => {
        const url = req.url;

        if (url === "/akleinau.github.io/RUBIN/") {
            // do a 302 redirect
            res.writeHead(302, {
              location: "https://akleinau.github.io/RUBIN/",
            });
            res.end();
          }
        else {
            // do a 200 response
            res.writeHead(200, {'Content-Type': 'text/html'});     
            res.write(data)
            res.end();
        }
        

    }).listen(process.env.PORT || 3000);

});
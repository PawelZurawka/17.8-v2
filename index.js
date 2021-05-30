const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, data){
            if (err) throw err;
            response.write(data);
            response.end();
        });
        
    } else {
            fs.readFile('./404.png', function(err, data){
                if (err) throw err;
                response.writeHead(200, { 'Content-Type': 'image/png' });
                response.end(data);
            });
    }
});

server.listen(9000);
console.log('Server running...');
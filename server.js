const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><head><style>body{background-color:blue}</style></head><body><h1>hola</h1></body></html>');


}
); 
server.listen(port,hostname, () => {
    console.log('server running on localhost', port);

}
);
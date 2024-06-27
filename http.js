const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.end('welcome to my homepage')
}
if (req.url === '/about') {
    res.end('welcome to my about page')
}
   res.end(`<h1> oops! </h1> 
    <a href = "/">back to home</a>`);
})

server.listen(5000)
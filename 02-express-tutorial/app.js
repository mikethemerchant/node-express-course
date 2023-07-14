const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.method);
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('<h1> Home Page </h2>');
    res.end();
})

server.listen(3000);

// port 80 is http
// port 443 is https
// port 22 ssh
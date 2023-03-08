var http = require('http');

var server = http.createServer(function(request, response) {
    // parse the request URL
    var url = new URL(request.url, 'http://localhost');
    
    if (url.pathname === '/') {
        // handle GET request for the root URL
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello from Node!");
    } else if (url.pathname === '/about') {
        // handle GET request for the '/about' URL
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end("<h1>About Us</h1><p>We are a company that provides Node.js development services.</p>");
    } else if (request.method === 'POST' && url.pathname === '/submit') {
        // handle POST request for the '/submit' URL
        var requestBody = '';
        request.on('data', function(chunk) {
            // collect the request body data
            requestBody += chunk.toString();
        });
        request.on('end', function() {
            // process the request body data
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Received data: " + requestBody);
        });
    } else {
        // handle all other requests
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not Found");
    }
}); 

server.listen(80);

# HTTP Server Node.js 

This is a simple Node.js HTTP server with basic routing functionality. The server listens on port 80 for incoming HTTP requests, and based on the requested URL and HTTP method, it sends a response with different content types and messages.

The server has three routes:

- A GET request for the root URL ("/"). It responds with a text message cited "Hello from Node!".
- A GET request for the "/about" URL. It responds with an HTML page containing some text about a company.
- A POST request for the "/submit" URL. It expects data input to be sent in the request body. Thereafter, it responds with a confirmation message having the received data.
  - However, if a request is received having a URL or HTTP method which does not match any of the defined         routes, the server shows a "404 Not Found" error message.

# How to start
In order to start the server, you need to run this code in a Node.js environment.
After this, access the defined routes using a web browser or an HTTP client. 

- For instance, you can access the root URL by moving to "http://localhost" in your browser. You can also send a POST request to the "/submit" URL with data in the request body by using an HTTP client like Postman.

// Import the http module
const http = require('http');

// Create the server 
const server = http.createServer((request, response) => {
    console.log('Server is created');
});

// Initialize the port
const port = 1010;

// Listen to the server
server.listen(port, () => console.log(`Server is listening on Port ${port}`));
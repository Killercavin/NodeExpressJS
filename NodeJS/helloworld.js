const http = require('http'); // importing http
const port = process.env.PORT || 3000; // 3000 to listen on

// creating a server
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1 style="text-align: center;">Hello World!</h1>');
})

// calling the server to listen to the given port
server.listen(port, () => {
	console.log(`Server is started & running at port ${port}`,'\nURL http://localhost:3000 or http://127.0.0.1:3000','\nPress CTRL + C to break or terminate...');
});

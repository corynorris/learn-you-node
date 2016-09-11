var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileUrl = process.argv[3];

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain'});
    var src = fs.createReadStream(fileUrl);
    src.pipe(response);
}).on('error', console.error);


server.listen(port);

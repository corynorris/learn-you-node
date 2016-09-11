var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {


    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);

    if (parsedUrl.pathname === '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }));
    } else if (parsedUrl.pathname === '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            unixtime: time.getTime()
        }));
    } else {
    	res.writeHead(403);
        res.end("Invalid Endpoint");
    }

}).on('error', console.error);

server.listen(port);

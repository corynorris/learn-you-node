var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');

	var fullResponse = "";

	response.on('data', function(data) {
		fullResponse += data;
	});

	response.on('end', function() {
		console.log(fullResponse.length);
		console.log(fullResponse);
	});
	

	response.on('error', console.error);
}).on('error', console.error);
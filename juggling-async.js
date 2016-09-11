var http = require('http');
var async = require('async');

var i = 2;
var getUrl = function(callback) {
	var url = process.argv[i++];
	http.get(url, function(response) {
		response.setEncoding('utf8');

		var fullResponse = "";

		response.on('data', function(data) {
			fullResponse += data;
		});

		response.on('end', function() {
			console.log(fullResponse);
			callback();
		});

		response.on('error', console.error);
	}).on('error', console.error);
};

async.series([
	getUrl,
	getUrl,
	getUrl
])
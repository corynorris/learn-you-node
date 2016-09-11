var folder = process.argv[2];
var ext = process.argv[3];

var filter = require('./file-filter.js');

filter(folder, ext, function(err, data) {
	
	if (err) return console.error(err);

	data.forEach(function(file) {
		console.log(file);
	});
});
var fs = require('fs');

var path = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(path, function(err, list) {
    if (err) return;

    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(ext) > -1) {
            console.log(list[i]);
        }
    }
});

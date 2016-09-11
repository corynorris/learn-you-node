var fs = require('fs');

var file = process.argv[2];
var br = fs.readFileSync(file);
var fstr = br.toString();

console.log(fstr.split('\n').length - 1);
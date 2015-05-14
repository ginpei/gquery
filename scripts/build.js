#!/usr/bin/env node

var fs = require('fs');
var glob = require('glob');
var UglifyJS = require('uglify-js');

var codes = [
	'(function(window, document) {\nvar gQuery=',
	fs.readFileSync('gquery.js', 'utf-8')
];
glob.sync('fn/*.js').forEach(function(fname) {
	codes.push(fs.readFileSync(fname, 'utf-8'))
});
codes.push('})(window, document)');

var codeAll = codes.join('\n');
var codeMin = UglifyJS.minify(codeAll, { fromString:true }).code;

fs.writeFileSync('gquery.all.js', codeAll);
fs.writeFileSync('gquery.all.min.js', codeMin);

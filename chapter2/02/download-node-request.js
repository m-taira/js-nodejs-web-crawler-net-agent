var request = require('request');
var fs = require('fs');

var url = 'http://ja.wikipedia.org/wiki/one';
var savepath = 'one.html';

request(url).pipe(fs.createWriteStream(savepath));
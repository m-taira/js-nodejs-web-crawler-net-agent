var client = require('cheerio-httpcli');
var URL = require('url');

var url = 'http://ja.wikipedia.org/wiki/one';

var param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) { console.log(err); return; }
  
  $('img').each(function (idx) {
    var src = $(this).attr('src');
    src = URL.resolve(url, src);
    
    console.log(src);
  })
})
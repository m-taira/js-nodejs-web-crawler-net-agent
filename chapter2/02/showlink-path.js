var client = require('cheerio-httpcli');
var URL = require('url');

var url = 'http://www.aozora.gr.jp/index_pages/person81.html';
var param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) { console.log('Error:', err); return; }

  $('a').each(function (idx) {
    var text = $(this).text();
    var href = $(this).attr('href');
    
    if (!href) return;
    
    var full_path = URL.resolve(url, href);

    console.log(text + ':' + full_path);
  });
});
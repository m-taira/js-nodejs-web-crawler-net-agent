'use strict';

var RSS = 'http://rss.weather.yahoo.co.jp/rss/days/6310.xml';

var client = require('cheerio-httpcli');

client.fetch(RSS, function(err, $, res){
  if(err) { console.log(err); return; }

  $('item > title').each(function(idx){
    var title = $(this).text();
    console.log(title);
  })
});
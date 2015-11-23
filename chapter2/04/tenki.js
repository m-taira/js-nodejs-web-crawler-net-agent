'use strict';

var RSS = 'http://rss.weather.yahoo.co.jp/rss/days/6310.xml';

var parseString = require('xml2js').parseString;
var request = require('request');

request(RSS, function(err, response, body){
  if(!err && response.statusCode == 200){
    analyzeRSS(body);
  } else {
    console.log(err);
  }
});

function analyzeRSS(xml){
  parseString(xml, function(err, obj){
    if(err) { console.log(err); return; }
    var items = obj.rss.channel[0].item;
    for(var i in items) {
      var item = items[i];

      console.log(item.title[0]);
    }
  });
}
'use strict';

var API = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json';

var request = require('request');
var fs = require('fs');

request(API, function(err, response, body){
  if(err || response.statusCode != 200){
    console.log(err);
    return;
  }

  var r = JSON.parse(body);
  var jpy = r['JPY'];

  var t =new Date();
  var fname = 'USD_JPY_' + t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDay() + '-' + t.getHours() + '-' + t.getMinutes() + '-' + t.getSeconds();
  var text = '1usd = ' + jpy + 'jpy';
  console.log(text);

  fs.writeFile(fname, text);

});

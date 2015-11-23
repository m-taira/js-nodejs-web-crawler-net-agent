'use strict';

var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var Builder  =xml2js.Builder;

var xml = '<fruites shop="AAA">' +
    '<item price="140">Banana</item>' +
    '<item price="200">Apple</item>' +
    '</fruites>';

parseString(xml, function(erro, result) {
  console.log(JSON.stringify(result));

  var xml = new Builder().buildObject(result);
  console.log(xml);
});
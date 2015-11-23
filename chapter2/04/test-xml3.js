'use strict'
var parseString = require('xml2js').parseString;

var xml = '<items>' +
    '<item><name>Banana</name><price>130</price></item>' +
    '<item><name>Apple</name><price>300</price></item>' +
    '<item><name>pear</name><price>250</price></item>' +
    '</items>';

parseString(xml, function(err, result){

  console.log(JSON.stringify(result));

  console.log('----');
  console.log(result.items.item[0].name[0]);
  console.log(result.items.item[0].price[0]);
});
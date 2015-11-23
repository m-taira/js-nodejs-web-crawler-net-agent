var parseString = require('xml2js').parseString;

var xml = "<fruites shop='AAA'>" +
  "<item price='140'>Banana</item>" +
  "<item price='200'>Apple</item>" +
  "</fruites>";

parseString(xml, function(err, result) {
  var shop = result.fruites.$.shop;
  console.log('shop = ' + shop);

  var items = result.fruites.item;

  for(var i in items) {
    var item = items[i];

    console.log('-- name = ' + item._);
    console.log('   price = ' + item.$.price);
  }
});
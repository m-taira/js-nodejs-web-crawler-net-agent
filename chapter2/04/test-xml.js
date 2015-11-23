var parseString = require('xml2js').parseString;

var xml = "<fruites shop='AAA'>" +
    "<item price='140'>Banana</item>" +
    "<item price='200'>Apple</item>" +
    "</fruites>";

parseString(xml, function(err, result) {
  console.log(JSON.stringify(result));
});
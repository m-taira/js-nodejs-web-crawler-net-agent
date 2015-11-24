'use strict';

var casper = require('casper').create();

casper.start();

casper.open('http://www.google.co.jp');

casper.then(function() {
  casper.capture('screenshot.png');
});

casper.run();
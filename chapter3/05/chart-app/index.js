'use strict';

var TARGET_URL = 'http://quote.jpx.co.jp/jpx/template/quote.cgi?F=tmp/hist_index&basequote=151&mode=D';

var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');

var win = null;
app.on('ready', function(){
  win = new BrowserWindow({width:800, height:800});
  win.loadUrl(TARGET_URL);

  win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc(){
  var t = new Date();
  var fname = 'kabu' + t.getFullYear() + '-' + (1 + t.getMonth()) + '-' + t.getDate() + '.png';
  setTimeout(function() {
    win.capturePage(function(img){
      fs.writeFileSync(fname, img.toPng());
      app.quit();
    });
  }, 2000);
}

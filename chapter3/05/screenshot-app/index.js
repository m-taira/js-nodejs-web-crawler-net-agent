'use strict';

var TARGET_URL = 'http://atom.io';

var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');

var win = null;
app.on('ready', function(){
  win = new BrowserWindow({width: 1024, heigth:800});
  win.loadUrl(TARGET_URL);
  win.webContents.on('did-finish-load', captureFunc)
});

function captureFunc(){
  win.capturePage(function(img){
    fs.writeFileSync('screenshot.png', img.toPng());
  })
}
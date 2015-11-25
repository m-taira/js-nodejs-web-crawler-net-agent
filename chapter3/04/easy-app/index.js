'use strict';

var TARGET_URL = 'http://ja.wikipedia.org/';

var app = require('app');
var BrowserWindow = require('browser-window');

// メインウィンドウを起動
var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadUrl(TARGET_URL);
});

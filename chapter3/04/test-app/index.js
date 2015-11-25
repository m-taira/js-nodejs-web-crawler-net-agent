'use strict'

var app = require('app');
var BrowserWindow = require('browser-window');

// メインウィンドウ
var mainWindow = null;

app.on('ready', function(){
  mainWindow = new BrowserWindow({width: 800, height: 600});

  var initial_url = 'file://'+ __dirname + '/index.html';
  mainWindow.loadUrl(initial_url);

  mainWindow.on('close', function(){
    mainWindow = null;
  });
});
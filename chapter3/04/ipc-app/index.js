'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');

var mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({width:800, height:600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  })
});

ipc.on('mul-sync', function(event, arg) {
  console.log(arg);
  event.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', function(event, arg) {

  sleep(3000, function(){
  console.log(arg);
  var result = arg.a + arg.b;
  event.sender.send('mul-async-reply', result);
  });
});

function sleep(time, callback){
  setTimeout(callback, time);
}
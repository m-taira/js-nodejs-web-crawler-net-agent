'use strict';

var ipc = require('ipc');
var info;

window.onload = function(){
  info = document.getElementById('info');
  testASync();
  testSync();
};

function testSync(){
  var res = ipc.sendSync('mul-sync', {a: 30, b:2});
  msg('sync result = ' + res);
}

function testASync(){
  ipc.send('mul-async', {a:30, b:2});

  ipc.on('mul-async-reply', function(arg) {
    msg('ascyn result = ' + arg);
  });
};

function msg(message){
  info.innerHTML += message + '<br>';
}
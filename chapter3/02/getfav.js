'use strict'

var BBS_USERNAME = 'JS-TESTER';
var BBS_PASSWORD = 'ipCU12ySxI';

var casper = require('casper').create();
casper.start();

var url = 'http://uta.pw/sakusibbs/users.php?action=login';
casper.open(url);

casper.then(function(){
  this.fill('form', {
    username_mmlbbs6: BBS_USERNAME,
    password_mmlbbs6: BBS_PASSWORD
  }, true);
});

casper.then(function() {
  var getLink = function(){
    var q = document.querySelector('#header_menu_linkbar a');
    return q.href;
  };

  var mypage_url = this.evaluate(getLink);
  this.echo('mypage url=' + mypage_url);
  this.open(mypage_url);
});

casper.then(function(){
  var pickupFav = function() {
    var res = [];
    var q = document.querySelectorAll('#favlist li > a');
    for(var i = 0; i < q.length; i++){
      var text = q[i].textContent;
      // var href = q[i].href;
      res.push(text);
    }
    return res;
  };

  var res = this.evaluate(pickupFav);

  this.echo('--- favlist ---');
  for(var i = 0; i < res.length; i++){
    this.echo('- ' + res[i]);
  }
});

casper.run();
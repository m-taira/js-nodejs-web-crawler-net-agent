var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

// ダウンロード先のディレクトリを作成
var savedir = __dirname + '/img';
if (!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}

// HTMLファイル
var url = 'http://ja.wikipedia.org/wiki/one';
var param = {};

client.fetch(url, function (err, $, res) {
  if (err) { console.log(err); return; }
  
  //リンクを抽出して表示
  $('img').each(function (idx) {
    var src = $(this).attr('src');
    src = URL.resolve(url, src);
    
    console.log(src);
    
    var fname = URL.parse(src).pathname;
    
    fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
    
    console.log(fname);
    
    request(src).pipe(fs.createWriteStream(fname));
  })
})

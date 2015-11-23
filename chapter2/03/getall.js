var client = require('cheerio-httpcli');
var request = require('request');
var URL = require('url');
var fs = require('fs');
var path = require('path');

// --- 共通設定 ---
// 階層の指定

var LINK_LEVEL = 3;

// 基準となるページ
var TARGET_URL = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/';
var list = {};


// メイン処理
downloadRec(TARGET_URL, 0);

function downloadRec(url, level) {
  //　最大レベルチェック
  if (level >= LINK_LEVEL) return;

  // 既出のサイトは無視
  if (list[url]) return;
  list[url] = true;

  // 基準ページ以外なら虫
  var us = TARGET_URL.split('/');
  us.pop();
  var base = us.join('/');
  if (url.indexOf(base) < 0) return;

  //HTMLを取得する
  client.fetch(url, {}, function (err, $, res) {

    if(err){
      console.log(err);
      return;
    }

    // リンクされているページを取得
    $('a').each(function (idx) {
      // <a>のリンク先を取得
      var href = $(this).attr('href');

      if (!href) return;

      // 相対パスを絶対パスに変換
      href = URL.resolve(url, href);

      // '#' 以降を無視する
      href = href.replace(/\#.+$/, "");
      downloadRec(href, level + 1);
    });

    // ページを保存する（ファイル名を決定）
    if (url.substr(url.length -1, 1) == '/') {
      url += 'index.html'; // url の末尾が / ならば index.html を追加
    }

    // プロトコル部分を削除
    var savepath = url.split('/').slice(2).join('/')
    checkSaveDir(savepath);
    console.log(savepath);

    fs.writeFileSync(savepath, $.html());
  });
}

function checkSaveDir(fname){
  // ディレクトリ部分を抜き出す
  var dir = path.dirname(fname);

  // ディレクトリを順番に作成
  var dirlist = dir.split('/');

  var p = '';

  for(var i in dirlist) {
    p += dirlist[i] + '/';
    if(!fs.existsSync(p)) {
      fs.mkdirSync(p)
    }
  }
}
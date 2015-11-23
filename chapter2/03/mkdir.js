var fs = require('fs');

// フォルダを作成する
console.log('mkdir 実行します。');

fs.mkdir('test', function(){
  console.log('フォルダ作成完了！')
});
console.log('mkdir 実行しました。 結果待ち。');

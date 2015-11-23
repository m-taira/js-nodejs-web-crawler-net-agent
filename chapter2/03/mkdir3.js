var fs = require('fs');

if(!fs.existsSync('test3')){
  fs.mkdirSync('test3');
  console.log('test3を作成しました');
} else {
  console.log('test3はすでに存在します。');
}
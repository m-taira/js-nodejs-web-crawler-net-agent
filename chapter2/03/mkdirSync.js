var fs = require('fs');

// フォルダを同期的に作成
console.log('mkdir 実行');
fs.mkdirSync('test-sync');
console.log('mkdir 完了');
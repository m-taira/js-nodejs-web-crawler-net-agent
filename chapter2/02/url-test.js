var URL = require('url');

var base = 'http://kujirahand.com/url/test/index.html';

var u1 = URL.resolve(base, 'a.html');
console.log('u1:' + u1);

var u2 = URL.resolve(base, '../b.html');
console.log('u2:' + u2);

var u3 = URL.resolve(base, '/c.html');
console.log('u3:' + u3);

var u4 = URL.resolve(base, '/temp/d.html');
console.log('u4:' + u4);

var u5 = URL.resolve(base, './temp/e.html');
console.log('u5:' + u5);
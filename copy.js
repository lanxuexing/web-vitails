let fs = require('fs');

// 同步操作复制并重命名文件
fs.copyFileSync('./docs/index.html', './docs/404.html');
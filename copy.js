let fs = require('fs');

// 同步操作复制并重命名文件
fs.copyFileSync('./www/index.html', './www/404.html');
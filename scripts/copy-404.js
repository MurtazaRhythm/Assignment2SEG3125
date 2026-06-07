const fs = require('fs');
const path = require('path');
const index = path.join(__dirname, '../build/index.html');
fs.copyFileSync(index, path.join(__dirname, '../build/404.html'));

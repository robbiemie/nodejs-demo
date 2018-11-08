const { basename, dirname, extname, resolve } = require('path')

const dir = resolve(__dirname, './names.js')

console.log('basename', basename(dir)) // names.js
console.log('dirname', dirname(dir)) // dirname E:\project\2018\personal\nodejs-demo\src\api
console.log('extname', extname(dir)) // extname .js

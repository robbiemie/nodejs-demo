const { parse, resolve } = require('path')

const dir = resolve(__dirname, './parse.js')

console.log('parse', parse(dir))

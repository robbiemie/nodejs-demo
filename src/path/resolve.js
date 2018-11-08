const { resolve } = require('path')

const dir = resolve(__dirname)
const dir1 = resolve(__dirname, '/')
const dir2 = resolve(__dirname, 'a')
const dir3 = resolve(__dirname, '/a', '/b/c')
const dir4 = resolve(__dirname, './')

console.log('dir', dir)
console.log('dir1', dir1)
console.log('dir2', dir2)
console.log('dir3', dir3)
console.log('dir4', dir4)

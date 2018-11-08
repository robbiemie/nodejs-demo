const fs = require('fs')
const { resolve } = require('path')

const dir = resolve(__dirname, './')

fs.watch(dir, {
  recursive: true // 是否递归监听(子文件夹监听)
}, (type, filename) => {
  console.log('watching file change', type, filename)
})

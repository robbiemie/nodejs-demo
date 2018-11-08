const fs = require('fs')
const { resolve } = require('path')

const dir = resolve(__dirname, './test1.txt')

const buf = Buffer.from('this is test2')

fs.writeFile(dir, buf, err => {
  if (err) throw err
  console.log('done!')
})

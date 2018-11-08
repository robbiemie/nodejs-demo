const { resolve } = require('path')
const fs = require('fs')

const dir = resolve(__dirname, './rmdir')
fs.rmdir(dir, err => {
  if (err) throw err
  console.log('rmdir done!')
})

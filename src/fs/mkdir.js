const { resolve } = require('path')
const fs = require('fs')

const dir = resolve(__dirname, './mkdir')
fs.mkdir(dir, err => {
  if (err) throw err
  console.log('mkdir done!')
})

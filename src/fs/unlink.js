const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, './test.txt')

fs.unlink(dir, err => {
  if (err) throw err
  console.log('unlink done!')
})

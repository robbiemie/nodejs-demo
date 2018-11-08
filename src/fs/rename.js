const path = require('path')
const fs = require('fs')

const oldDir = path.resolve(__dirname, './text.txt')
const newDir = path.resolve(__dirname, './test1.txt')

// fs.rename(oldPath, newPath, callback)
fs.rename(oldDir, newDir, err => {
  if (err) throw err
  console.log('rename done!')
})

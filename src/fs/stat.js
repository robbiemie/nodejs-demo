const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, './file.js')

fs.stat(dir, (err, stats) => {
  if (err) throw err
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})

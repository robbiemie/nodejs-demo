const fs = require('fs')
const { resolve } = require('path')

const dir = resolve(__dirname, '../')

fs.readdir(dir, (err, files) => {
  if (err) throw err

  console.log(files)
})

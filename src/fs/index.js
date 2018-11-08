const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, './file.js')

const result = fs.readFile(dir, (err, data) => {
  if (err) {
    console.log('err', err)
  }
  console.log('data', data.toString())
})

console.log('result', result)

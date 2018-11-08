const path = require('path')
const fs = require('fs')

const dir = path.resolve(__dirname, './file.js')

fs.readFile(dir, 'utf8', (err, data) => {
  if (err) {
    console.log('err', err)
  }
  console.log('data', data.toString())
})

// 或者传入编码格式
// fs.readFile(dir, 'utf8', (err, data) => {
//   if (err) {
//     console.log('err', err)
//   }
//   console.log('data', data)
// })

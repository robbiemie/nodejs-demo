const fs = require('fs')
const { resolve } = require('path')

const dir = resolve(__dirname, './test1.js')

const ws = fs.createWriteStream(dir)

const timer = setInterval(() => {
  const num = parseInt(Math.random() * 10)
  if (num <= 8) {
    ws.write(`${num}`)
  } else {
    clearInterval(timer)
    ws.end()
  }
}, 500)

ws.on('finish', _ => {
  console.log('done!')
})

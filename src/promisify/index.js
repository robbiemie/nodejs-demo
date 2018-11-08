const { promisify } = require('util')
const fs = require('fs')
const { resolve } = require('path')

const read = promisify(fs.readFile)
const dir = resolve(__dirname, './test1.js')

// read(dir).then(res => {
//   console.log('res', res.toString())
// }).catch(e => { console.log(e) })

async function cb () {
  try {
    const res = await read(dir)
    console.log('res', res.toString())
  } catch (e) {
    console.log(e)
  }
}

cb()

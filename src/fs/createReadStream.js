// const process = require('process')
const { createReadStream } = require('fs')
const { resolve } = require('path')

const dir = resolve(__dirname, './file.js')

// Returns a new ReadStream object.
const rs = createReadStream(dir)

rs.pipe(process.stdout)

/**
 * The path.normalize() method normalizes the given path, resolving '..' and '.' segments.
 */
const { normalize, resolve } = require('path')

const dir = resolve(__dirname)

console.log('normalize', normalize(dir + '/..'))

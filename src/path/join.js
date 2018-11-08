/**
 * The path.join() method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.
 */
const { join } = require('path')

const dir1 = join('/usr', 'local', 'bin/')

console.log('dir1', dir1)

const dir2 = join('/usr', '../local', 'bin/')

console.log('dir2', dir2)

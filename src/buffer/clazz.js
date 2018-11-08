/**
 * Buffer.byteLength
 * Buffer.isBuffer
 * Buffer.concat
 */

console.log(Buffer.byteLength('test'))
console.log(Buffer.byteLength('测试'))

console.log(Buffer.isBuffer([1, 2, 3]))
console.log(Buffer.isBuffer(Buffer.from(([1, 2, 3]))))

const bf1 = Buffer.from('1')
const bf2 = Buffer.from('2')
const bf3 = Buffer.from('3')
const bf4 = Buffer.from('4')
const bf5 = Buffer.from('5')

console.log(Buffer.concat([bf1, bf2, bf3, bf4, bf5]).toString())

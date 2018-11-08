/**
 * bf.length
 * bf.toString()
 * bf.fill()
 * bf.equals
 * bf.indexOf
 */

const bf = Buffer.from('123456')

console.log(bf)

console.log(bf.length)

console.log(bf.toString())

const bf1 = Buffer.alloc(10, 9)
console.log(bf1.fill('x', 1, 5).toString())

const bf2 = Buffer.from('123456')
const bf3 = Buffer.from('123456')
const bf4 = Buffer.from('12345')

console.log(bf2.equals(bf3))
console.log(bf2.equals(bf4))

console.log(bf2.indexOf('45'))
console.log(bf2.indexOf('43'))

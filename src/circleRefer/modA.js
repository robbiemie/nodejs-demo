module.exports.val = 100

const modB = require('./modB')
console.log('this is ModB', modB.val) // 2

module.exports.val = 200

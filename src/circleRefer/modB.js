module.exports.val = 1

const modA = require('./modA')

console.log('this is modB', modA.val) // 200

module.exports.val = 2

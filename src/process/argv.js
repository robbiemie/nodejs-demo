const { argv, argv0, execArgv, execPath } = require('process')

/**
 * 查看正在执行的指令
 * @param
 *  1. process.execPath nodejs 绝对路径
 *  2. 被执行的js文件的绝对路径
 *  3. 待传入的参数
 */

// bash: node ./src/index.js --opt=1 a=b c
argv.forEach(item => {
  console.log('item', item)
})

console.log('argv0', argv0)

console.log('execArgv', execArgv)
// bash: node -opt ./src/index.js --opt=1 a=b c
console.log('execPath', execPath)

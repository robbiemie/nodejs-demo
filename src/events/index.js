const EventEmitter = require('events')

class Bus extends EventEmitter {}

const bus = new Bus()

const fn = (res, time) => {
  console.log('args', res, time)
}
bus.on('emitter', fn) // 注册监听事件
let count = 0
let timer = setInterval(() => {
  count++
  if (count === 4) bus.removeListener('emitter', fn) // 移除事件
  if (count > 10) clearInterval(timer)
  bus.emit('emitter', '123', Date.now()) // 可传多个参数值
}, 1000)

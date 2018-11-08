const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')

const buf = Buffer.from('我是中文乱am啊！！！.')

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.alloc(5)
  buf.copy(b, 0, i)
  console.log(b.toString())
}

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.alloc(5)
  buf.copy(b, 0, i)
  console.log(decoder.write(b))
}

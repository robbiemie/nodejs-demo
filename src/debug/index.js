/**
 * Debug Tool
 * visit: https://go.microsoft.com/fwlink/?linkid=830387
 * */
const test1 = () => {
  const a = parseInt(Math.random() * 10)
  const b = parseInt(Math.random() * 10)
  return test2(a, b)
}

const test2 = (a, b) => {
  if (a > b) {
    a = a + b
  } else {
    a = a - b
  }
  return a
}

test1()

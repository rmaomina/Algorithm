// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const members = input

const result = members.map(el => {
  if (el === '# 0 0') return 
  const [name, age, weight] = el.split(' ')
  let status = 'Junior'
  if (age > 17 || weight >= 80) {
    status = 'Senior'
  }
  return `${name} ${status}`
})

console.log(result.join('\n'))
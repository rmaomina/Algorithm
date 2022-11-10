// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

let answer = ''
input.forEach(el => {
  const [sh, sm, ss, eh, em, es] = el.split(' ').map(Number)

  const sTotal = sh * 3600 + sm * 60 + ss
  const eTotal = eh * 3600 + em * 60 + es

  const timeDiff = eTotal - sTotal

  const dh = parseInt(timeDiff / 3600)
  const dm = parseInt((timeDiff - (dh * 3600)) / 60)
  const ds = (timeDiff % 3600) % 60

  answer += `${dh} ${dm} ${ds}\n`
})

console.log(answer)
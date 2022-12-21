// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [total, ...array] = input

let student = {}

array.forEach(el => {
  const info = el.split(' ')
  student[info[0]] = info.slice(1).map(Number)
})

const sorted = Object.keys(student).sort((a, b) => {
  let a1 = student[a][0]
  let a2 = student[a][1]
  let a3 = student[a][2]
  let b1 = student[b][0]
  let b2 = student[b][1]
  let b3 = student[b][2]

  if (b1 !== a1) {
    return b1 - a1
  } else if (b1 === a1 && a2 !== b2) {
    return a2 - b2
  } else if (b1 === a1 && a2 === b2 && b3 !== a3) {
    return b3 - a3
  } else {
    for (let i = 0; i < 10; i++) {
      if (a.charCodeAt(i) === b.charCodeAt(i)) {
          continue;
      } else {
          return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }
  }
})

console.log(sorted.join('\n'))
// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const score = input.map(el => el.split(' ').map(Number))

answer = ''
score.forEach(el => {
  let sum = 0
  let [touchdown, fieldGoal, safety, pointAfter, twoPoint] = el
  sum += touchdown * 6
  sum += fieldGoal * 3
  sum += safety * 2
  sum += pointAfter * 1
  sum += twoPoint * 2
  answer += sum + ' '
})

console.log(answer.trim())
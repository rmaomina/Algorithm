// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let [N, ...array] = input

array = array.map(el => el.split(' ').map(Number))
// 끝시간을 기준으로 오름차순 정렬하는 이유는 
// 가장 빨리 끝나는 회의 시간을 알기 위해서
array.sort((a, b) => {
  // 만약 끝나는 시간이 같다면 먼저 시작한 회의 시간을 선택하도록 
  // case 3 3, 3 3, 1 3 -> // 1 or 3
  if (a[1] === b[1]) return a[0] - b[0]
  else return a[1] - b[1]
})

let result = 1

array.reduce((a, c) => {
  // meeting보다 시작시간이 같거나 큰 것만 
  if ( a[1] <= c[0]) {
    result++
    return c
  } 
  else return a
})

console.log(result)



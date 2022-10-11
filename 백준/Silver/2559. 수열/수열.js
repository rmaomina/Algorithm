// 수열 연속적인 k일의 최대 온도합 구하기 
const path = __dirname + '/input_boj1.txt'
// const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let [ N, K ] = input[0].split(' ').map(Number)
let tempArr = input[1].split(' ').map(Number)

function solution(n, k, array) {
  let total = []
  // N이 10, K가 2일 때 9번 반복 10 - 2 + 1 
  // N이 10, K가 5일 때 6번 반복 10 - 5 + 1
  for (let i = 0; i < n - (k - 1); i++) { 
    let tempPerDay = 0
    for (let j = i; j < i + k; j++) {
      tempPerDay += array[j]
    }
    total.push(tempPerDay)
  }
  return total
}

let result = solution(N, K, tempArr)
console.log(Math.max(...result))

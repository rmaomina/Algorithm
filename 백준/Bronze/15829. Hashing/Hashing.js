
// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let size = +input[0]
let array = input[1].split('')

function makeHash (arr) {
  // M과 r은 서로소인 숫자로 M은 1234567891,
  // r은 자릿수(항)마다 31을 거듭제곱한 수.
  let M = 1234567891
  let r = 1
  // 값을 누적해 최종적으로 반환할 해시 변수.
  let hash = 0

  for (let i = 0; i < size; i++) {
    // 아스키코드로 변환했을 때 a부터 1로 계산하기 위해 -96
    hash += (arr[i].charCodeAt() - 96) * r
    // 자리수마다 31을 거듭제곱하기 때문에 곱해줌.
    r *= 31
    // r이 M값을 넘지 않도록 나머지를 다시 저장 
    r %= M
    // 최종 hash 값 역시 M값을 넘지 않도록 나머지를 저장 
    hash %= M
  }

  return hash
}

console.log(makeHash(array))
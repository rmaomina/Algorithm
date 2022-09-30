// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = +require('fs').readFileSync(path).toString().trim()
const n = Number(input)

let answer = ''

const star = (i, j, n) => {
  if (i % 3 === 1 && j % 3 === 1) {
    // (1,1) ... (1,4), (1,7) ,(4,1), ... 등 공백의 위치를 좌표로 계산한다면 
    // %3 을 하였을 때 항상 나머지가 1이다
    answer += ' '
  } else {
    if (n === 1) {
      // 위의 조건에 부합하지 않고 num이 /3을  n번 하여 1이 되었다면 *을 출력한다
      answer += '*'
    } else {
       // num이 1이 아니라면 3으로 나누어서 재귀 알고리즘을 한다.
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(n / 3))
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    star(i, j, n)
  }
  answer += '\n';
}

console.log(answer);


// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const count = Number(input)

const dp = new Array(count + 1).fill(0);

for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1)
  }
    
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1)
  }
}

console.log(dp[count]);
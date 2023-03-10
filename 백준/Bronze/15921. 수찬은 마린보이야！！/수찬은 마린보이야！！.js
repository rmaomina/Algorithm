// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const n = +input[0]

if (n === 0) console.log("divide by zero");
else {
  const exps = input[1].split(" ").map(Number)
  const map = new Map()
  const avg = exps.reduce((a, c) => a + c) / n;

  for (let ex of exps) {
    if (!map.has(ex)) map.set(ex, 0)
    map.set(ex, map.get(ex) + 1)
  }

  let probability = 0;
  map.forEach((v, k) => {
    probability += k * (v / n)
  })

  console.log((avg / probability).toFixed(2))
  
}

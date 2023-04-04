
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

const n = +input;
let result = "int a;\n"

for (let i = 1; i <= n; i++) {
  let template = "";

  if (i === 1) {
    template = `int *ptr = &a;`
  } else if (i === 2){
    template = `int ${"*".repeat(i)}ptr${i} = &ptr;`
  } else {
    template = `int ${"*".repeat(i)}ptr${i} = &ptr${i - 1};`
  }
  result += template + "\n"
}

console.log(result)

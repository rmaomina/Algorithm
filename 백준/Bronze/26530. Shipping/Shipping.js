
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()


let [x, ...items] = input.split("\n");
let result = "";

for (let i = 0; i < +x; i++) {
    let n = items.shift();
    let sum = 0;
    for (let j = 0; j < +n; j++) {
        let item = items.shift().split(" ");
        let quantity = item[1];
        let price = item[2];
        sum += parseFloat(quantity * price);
    }
    result += `$${sum.toFixed(2)}\n`;
}

console.log(result);


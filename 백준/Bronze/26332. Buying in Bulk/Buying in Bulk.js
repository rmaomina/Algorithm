
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n");

const [n, ...lines] = input;
const result = lines.map(el => {
    const [each, price] = el.split(" ");
    return `${el}\n${each * price - ((each - 1) * 2)}`;
}).join("\n");


console.log(result);

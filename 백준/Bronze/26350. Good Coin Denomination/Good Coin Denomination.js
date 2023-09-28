
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')
.slice(1)

const result = input.map(el => {
    let coins = el.split(" ").map(Number).slice(1);
    let isPass = true;
    coins.reduce((a, c) => {
        if (a * 2 > c) {
            isPass = false;
        }
        return c;
    })

    if (isPass) {
        return `Denominations: ${coins.join(" ")}\nGood coin denominations!\n`
    } else {    
        return `Denominations: ${coins.join(" ")}\nBad coin denominations!\n`
    }
});

console.log(result.join("\n"));
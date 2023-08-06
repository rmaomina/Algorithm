
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [rate, customer, ...array] = input.split("\n");

let result = "";
const [underRate, overRate] = rate.split(" ").map(Number);

for (let usageOfCustomer of array) {
    const usage = Number(usageOfCustomer);
    if (usage <= 1000) {
        result += `${usage} ${underRate * usage}`
    } else {
        result += `${usage} ${(underRate * 1000) + (overRate * (usage - 1000))}`;
    }
    result += "\n"
}

console.log(result)
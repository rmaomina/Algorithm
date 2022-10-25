// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const open = ["(", "["];
const closed = [")", "]"];
let stack;
const yesno = [];
input.slice(0, input.length-1).forEach(v => {
    let isNo = false;
    stack = [];
    for (let i=0; i<v.length; i++) {
        if (open.includes(v[i])) stack.push(v[i]);
        else if (closed.includes(v[i])) {
            if (stack.pop() !== open[closed.indexOf(v[i])]) {
                yesno.push("no");
                isNo = true;
                break;
            }
        }
    }
    if (!isNo) {
        if (stack.length === 0) yesno.push("yes");
        else yesno.push("no");
    }
});

console.log(yesno.join("\n"));
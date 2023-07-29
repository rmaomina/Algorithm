
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

let result = "";

for (let sentance of input) {
    if (sentance === "CU" ) result += "see you";
    else if (sentance === ":-)")	result += "I’m happy";
    else if (sentance === ":-(") result += "I’m unhappy";
    else if (sentance === ";-)") result += "wink";
    else if (sentance === ":-P")	result += "stick out my tongue";
    else if (sentance === "(~.~)") result += "sleepy";
    else if (sentance === "TA") result += "totally awesome";
    else if (sentance === "CCC") result += "Canadian Computing Competition";
    else if (sentance === "CUZ") result += "because";
    else if (sentance === "TY") result += "thank-you";
    else if (sentance === "YW") result += "you’re welcome";
    else if (sentance === "TTYL") result += "talk to you later";
    else {
        result += sentance;
    }
    result += "\n"
}

console.log(result)
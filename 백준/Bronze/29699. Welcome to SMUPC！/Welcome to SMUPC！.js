
console.log("WelcomeToSMUPC"[(+require('fs').readFileSync('./dev/stdin').toString() - 1) % 14]);
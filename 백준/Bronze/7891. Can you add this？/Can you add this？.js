const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = Number(input.shift());

  for (let i = 0; i < T; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    console.log(a + b);
  }
});

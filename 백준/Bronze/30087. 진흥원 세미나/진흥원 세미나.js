
// const path = __dirname + '/input_boj5.txt';
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, ...array] = input.split("\n");
let seminar = {
  Algorithm:	"204",
  DataAnalysis:	"207",
  ArtificialIntelligence:	"302",
  CyberSecurity:	"B101",
  Network:	"303",
  Startup:	"501",
  TestStrategy:	"105",
}
let result = "";

for (let cls of array) {
  result += seminar[cls] + "\n";
}

console.log(result);
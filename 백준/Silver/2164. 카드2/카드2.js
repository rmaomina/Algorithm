const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const solution = (N) => {
  const bin = Number(N).toString(2).split('');
      
  bin.shift();
      
  const answer = parseInt(bin.join(''), 2);
      
  return answer ? answer * 2 : N;

}

console.log(solution(input));
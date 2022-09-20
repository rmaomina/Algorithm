// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
// 백준 카드2

const input = require('fs')
.readFileSync(__dirname + '/input_boj.txt')
.toString()
.trim()

// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const solution = (N) => { 
  // 1. 시간 초과
  // let cards = Array.from(new Array(Number(N)), (x, i) => (i + 1))
  // while (cards.length > 1) {
  //   cards.shift()
  
  //   let swap = cards.shift()
  //   cards.push(swap)
  // }
  
  // 2. 큐를 링크드 리스트로 Linked List -> TODO!! 
  
  // 3. 신박한 방법
  // 신박한 방법을 찾아서 추가함 이진법 빼기  + 규칙 찾기 
  // 1. n이 2^x 일 경우 값은 n
  // 2. (n - (n보다 작은 2^x)) * 2
  // 출처: https://hanch-dev.tistory.com/8 [HanCh_Dev:티스토리]
  //숫자를 2진법으로 변환
  const binArr = N.toString(2).split('');
      
  //n보다 작은 2^x 값 빼기 
  binArr.shift();

  //남은수 10진법으로 변환
  const answer = parseInt(binArr.join(''), 2);

  //answer가 0이면 그 수는 2^x 이므로 n
  return answer ? answer * 2 : N;

}

console.log(solution(input));

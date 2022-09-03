function solution(n) {
    
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return (i + 1) ** 2
        }
    }
    return -1
}

////https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
// 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
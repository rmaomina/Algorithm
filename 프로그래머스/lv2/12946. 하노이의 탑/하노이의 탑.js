// 첫번째 풀이
// function solution(n) {    
//     let result = []
//     const hanoi = (num, from, to, other) => {
//         if (num === 0) return 
//         hanoi(num - 1, from, other, to)
//         result.push([from, to])
//         hanoi(num - 1, other, to, from )
//         return result
//     }
//     return hanoi(n, 1, 3, 2)
// }

// 다른 사람 풀이
function solution (n) {
  const hanoi = (num, from, to, other) => {
  if (num === 1) return [[from, to]];
  return [
      ...hanoi(num - 1, from, other, to),
      ...hanoi(1, from, to, other),
      ...hanoi(num - 1, other, to, from),
      ]
  }
  
  return hanoi(n, 1, 3, 2)
}

console.log(solution(2)) // [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
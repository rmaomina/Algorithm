// 세번째 시도 (레퍼런스 참고) : (DP 방식인 것 같음)
function solution(land) {
  var answer = 0;
  
  for (i = 1; i < land.length; i++){
      land[i][0] += (Math.max(land[i-1][1], land[i-1][2], land[i-1][3]));
      // [1,9,3,5]
      // [5,6,7,8]일 때, 연속된 index 제외하고 가장 큰 수를 계속 더해감. 
      // [14, 11, 16, 17]
      land[i][1] += (Math.max(land[i-1][0], land[i-1][2], land[i-1][3]));
      land[i][2] += (Math.max(land[i-1][0], land[i-1][1], land[i-1][3]));
      land[i][3] += (Math.max(land[i-1][0], land[i-1][1], land[i-1][2]))
  }
  answer = land[land.length - 1]
  console.log(answer)
  return Math.max(...answer)
}

// 2. 두번째 시도 slice로 0.067
// function solution(land) {
//   let answer = Math.max(...land[0])
//   let initIdx = land[0].indexOf(answer)

//   for (let i = 1; i < land.length; i++) {
//     let largest = Math.max(...[...land[i].slice(0, initIdx), ...land[i].slice(initIdx+1)])
//     initIdx = land[i].indexOf(largest)
//     answer += largest

//   }
//   return answer
// }

// 1. 첫번째 시도 reduce로.. 
// 정확도도 0, 효율성도 0 !! 답은 나오는데..? 시간 0.066 
// function solution(land) {
//   let answer = 0;
//   let prevIdx = -1
  
//   answer = land.reduce((acc, cur) => {
//       let largest = cur.reduce((a, c, i) => {
//           if (prevIdx !== i) {
//               return Math.max(a, c)
//           } else {
//               return a
//           }
//       })

//       let idx = cur.indexOf(largest)

//       prevIdx = idx
//       return acc + cur[idx]
//   }, 0)
//   return answer
// }

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]])) // 16
console.log(solution([[1,9,3,5],[5,6,7,8],[4,3,2,1], [2,6,7,6], [5,6,7,8], [5,6,7,8]])) // 43
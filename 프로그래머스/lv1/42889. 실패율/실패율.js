function solution(N, stages) {
  // N은 스테이지의 갯수
  // stages.length는 사용자 
  // stages[i]는 사용자가 머무는 스테이지
  // 예를 들어 N = 5, [2,1,3,2]이면 
  // 3명의 사용자중에 1스테이지에 1명 2스테이지에 1명, 3스테이지에 1명,
  
  let failRate = []

  // 스테이지를 반복하면서 각 스테이지 실패한 사람 찾아내기 
  for (let i = 1; i <= N; i++) { // 스테이지 수만큼 반복.
    const failure = stages.filter(el => el === i).length // 1스테이지에 머무는 사람 몇명? 
    const tried = stages.filter(el => el >= i).length

    // failure / tried에 .toFixed(2)가 에러가 나는 이유를 모르겠음. 
    failRate.push({stage: i, compare: failure / tried})
  }

  const answer = []

  failRate.sort((a, b) => b.compare - a.compare)
  // console.log(failRate)
  for (let elem of failRate) answer.push(elem.stage)

  return answer;
}

console.log(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3])) // [3, 4, 2, 1, 5]
console.log(solution(4,	[4,4,4,4,4])) // [4, 1, 2, 3]
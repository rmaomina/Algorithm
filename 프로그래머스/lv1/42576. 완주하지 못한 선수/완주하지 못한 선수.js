function solution(participant, completion) {
  // 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
  // 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
  // 완주하지 못한 선수의 이름을 return

  // ----------------- 첫번째 -------------------
  // splice를 사용하고 효율성 통과가 되지 않음. 효율성 문제인 것 같다. 
  // [Done] exited with code=0 in 0.084 seconds

  // completion.forEach(person => {
  //   participant.splice(participant.indexOf(person), 1);
  // });
  
  // return participant[0];

  // ------------------ 두번째 ----------------------
  
  // participant가 완주했는지 기록한다. 
  // let record = {}
  // for (let person of participant) {
  //   // 동명이인 처리가 안됨 --> 완주한 사람이 몇 명인지 확인 
  //   if (!record[person]) {
  //     record[person] = 1
  //   } else {
  //     record[person] += 1
  //   }
  // }
  // console.log(record)

  // completion.forEach(elem => {
  //   if (record[elem]) record[elem] -= 1
  // });
  
  // return Object.keys(record).filter(x => record[x] === 1)[0]

  // ---------------- 세번째 ---------------------

  // 힌트를 보니 순서를 정렬하고 인덱스를 비교해서 인덱스와 다르면 바로 return 하는 것 같음. 
  // [Done] exited with code=0 in 0.075 seconds
  participant = participant.sort()
  completion = completion.sort()

  console.log(completion)
  console.log(participant)

  let result = ''

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) { 
      result = participant[i] // 참가자가 더 많기 때문 참가자를 담아야 
      break
    }
  }
  return result
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])) // --> 'leo'
console.log(solution(["leo", "kiki", "eden", "eden"], ["eden", "kiki", "leo"])) // --> 'eden'
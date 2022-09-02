function solution(id_list, report, k) {

  let answer = new Array(id_list.length).fill(0);
  let blackList = []
  let record = {}

  // {신고당한 사람: [...신고한 사람]} 데이터(record)
  report.map(elem => {
    const [user, reportedUser] = elem.split(' ');
    if (!record[reportedUser]) record[reportedUser] = []
    record[reportedUser].push(user)
  })
  console.log(record)

  // 신고 기록(record) 중복 제거, 블랙리스트로 정리 
  for (let users in record) {
    let setList = new Set(record[users])
    if (setList.size < k) continue
    blackList = blackList.concat([...setList])
  }
  
  // id_list에 포함된 이름을 걸러 갯수를 answer에 담는다. 
  answer = id_list.map(name => {
    return blackList.filter(user => name === user).length
  })

  return answer
}

// 출력 크기 초과 : 출력문이 너무 많아 그런걸 수도.. ㅜ

// function solution(id_list, report, k) {
//   let answer = new Array(id_list.length).fill(0);
//   let record = {}

//   // {신고당한 사람: [...신고한 사람]}
//   report.map(elem => {
//     const [user, reportedUser] = elem.split(' ');
//     if (!record[reportedUser]) record[reportedUser] = []
//     record[reportedUser].push(user)
//     return
//   })
//   console.log(record)

//   // k번 이상 신고 당한 사람 
//   for (let user in record) {
//     // 같은 사람이 신고한 횟수 무시 
//     record[user] = record[user].filter(elem => id_list.includes(elem))
//     // 해당 유저 목록에 있는지 검사 
//     record[user] = new Set(record[user])

//     const reportedUsers = [...record[user]]

//     if (reportedUsers.length >= k) {
//       for (let reportedUser of reportedUsers) {
//         const idx = id_list.findIndex(el => el === reportedUser)
//         answer[idx] += 1
//       }
//     }
//   }
  
//   return answer;
// }

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))
console.log(solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"],	3)) //	[0,0]
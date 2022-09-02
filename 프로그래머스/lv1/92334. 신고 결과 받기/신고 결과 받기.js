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

  // 신고 기록(record) 중복 제거, 블랙리스트로 정리 
  for (let users in record) {
    let setList = new Set(record[users])
    if (setList.size < k) continue
    blackList = blackList.concat([...setList])
  }
  
  answer = id_list.map(name => {
    return blackList.filter(user => name === user).length
  })
    return answer
}
function solution(participant, completion) {
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
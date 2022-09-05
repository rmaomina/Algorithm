function solution(lottos, win_nums) {
    
  // 최저는 0이 당첨번호가 아니라고 가정할 때, 현재 가진 번호만으로 조회.
  // 최고는 0이 당첨번호 였다고 가정했을 때, 현재 가지고 있지 않은 당첨번호를 추가.
  // 로또 순위 족보? index로 맞은 개수가 들어감 
  const winList = [6, 6, 5, 4, 3, 2, 1]; 
  
  const unKnownNum = lottos.filter(el => el === 0).length // 0, 0 --> 2
  const matchNum = lottos.filter(el => win_nums.includes(el)).length // 1, 31 --> 2

  const minimumWin = winList[matchNum]
  const maximumWin = winList[matchNum + unKnownNum] 
  // 모두 0이 나올 경우, 0 + 6 --> 1등
  
  return [maximumWin, minimumWin]
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))
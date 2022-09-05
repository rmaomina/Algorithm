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
// ////https://github.com/codeisneverodd/programmers-coding-test
// //더 좋은 풀이가 존재할 수 있습니다.
// // 1(🎩 refactor 220425) - codeisneverodd
// function solution(lottos, win_nums) {
//   const zeroCount = lottos.filter((e) => e === 0).length;
//   const matchCount = win_nums.filter((e) => lottos.includes(e)).length;
//   const matchToRank = [6, 6, 5, 4, 3, 2, 1];
//   const lowRank = matchToRank[matchCount];
//   const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];

//   return [highRank, lowRank];
// }


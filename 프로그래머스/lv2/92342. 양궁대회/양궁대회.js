// 양궁대회
// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/92342
// 풀이(해설만) : https://yjyoon-dev.github.io/kakao/2022/01/17/kakao-2022-blind-04/
// 풀이1 (코드, 완전탐색 & DFS) : https://eunchanee.tistory.com/634
// > 풀이2 (코드, DFS) https://tobegood.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-js-%EC%96%91%EA%B6%81%EB%8C%80%ED%9A%8C 

// 풀이 1
function solution1 (n, info) {
  let answer = []
  let score = 0

  // 깊이 우선 탐색 
  // (다음 화살을 맞힐 인덱스, 남은 화살 갯수, 현재 라이언 점수판)
  const dfs = (idx, remain, board) => {
    // remain이 0보다 작은경우 리턴 (base case)
    if (remain < 0) return 
    // remain이 0이면 화살을 다 쏘았기 때문에 점수를 비교
    if (remain === 0) {
      let lionScore = 0
      let apeachScore = 0

      for (let i = 0; i < 11; i++) { // 과녘 점수
        // 어피치 점수가 0이고 라이언 과녘이 0인 경우 다음으로 
        if (info[i] === 0 && board[i] === 0) continue
        const diff = info[i] - board[i]
        if (diff > 0) {
          apeachScore += (10 - i)
        } else if (diff < 0) {
          lionScore += (10 - i)
        }
      }

      const diff = lionScore - apeachScore

      if (score === diff) {
        const aReverse = [...answer].reverse().join('')
        const bReverse = [...board].reverse().join('')

        if (aReverse < bReverse) answer = [...board]
      } else if (score < diff) {
        answer = [...board]
        score = diff
      }
      return 
    }

    for (let i = idx; i < 11; i++) {
      const origin = board[i]
      for (let j = info[i] + 1; j >= 0; j--) {
        board[i] = j
        dfs(i + 1, remain - j, board)
      }
      board[i] = origin
    }
  }

  // 과녘의 점수로 반복문
  for (let i = 0; i < 11; i++) {
    // 라이언의 점수판 초기화 
    const board = new Array(11).fill(0)
    // 라이언 점수가 1이 높은 상태로 시작 (같으면 어피치가 이기기 때문)
    board[i] = info[i] + 1
    dfs(i + 1, n - board[i], board)
  }

  return score === 0 ? [-1] : answer

}

// 풀이 2
function solution(n, info) {
  let maxDiff = 0;
  let ryonInfo = Array(11).fill(0);
  
  const shot = (peachScore, ryonScore, count, idx, board) => {
    if(n < count) return
    if(idx > 10){
      let diff = ryonScore - peachScore;
      if(diff > maxDiff){
        board[10] = n - count;
        maxDiff = diff
        ryonInfo = board;
      }
      return;
    }
    if(n > count) {
      let board2 = [...board];
      board2[10 - idx] = info[10 - idx] + 1;
      shot(peachScore, ryonScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
    }
    
    if(info[10 - idx] > 0){
      shot(peachScore + idx, ryonScore, count, idx + 1, board)
    } else {
      shot(peachScore, ryonScore, count, idx + 1, board)
    }
  }
  shot(0, 0, 0, 0, ryonInfo)
  
  if(maxDiff <= 0) return [-1];
  else return ryonInfo;
}

console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0])) // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0])) // [-1]
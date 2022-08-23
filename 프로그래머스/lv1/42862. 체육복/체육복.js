
function solution(n, lost, reserve) {
  // 전체 학생의 수는 2명 이상 30명 이하
  // 도난 학생수는 1명 이상 n명 이하이고 중복되는 번호는 없다
  // 체육수업을 들을 수 있는 학생의 최댓값을 return

  // 이 식은 안풀려서 가져온 레퍼런스 왜 이건 되고 아래는 안되는지.
  // 확인 그리고 한번 더 풀이하자!!!
  let answer = 0;
  let studentClothes = new Array(n + 2).fill(1); // [1, 1, 1, 1 ...] 총 학생의 +2 만큼 배열을 만듬 

  for (const student of reserve) studentClothes[student] += 1; // 여분의 체육복을 가진 학생은 +1을 함 (이미 자기 여분도 체크됨)
  for (const student of lost) studentClothes[student] -= 1; // 체육복을 잃어버린 학생은 -1을 함
  for (let i = 1; i < n + 1; i++) {
    if (studentClothes[i] === 0) { // 학생이 0이면 --> 체육복 없음.
      if (studentClothes[i - 1] === 2) { // 만약 왼쪽에 여분이 있으면, 가져오고 
        studentClothes[i - 1] -= 1;
        studentClothes[i] += 1;
      } else if (studentClothes[i + 1] === 2) { // 오른쪽에 있으면, (반복)
        studentClothes[i + 1] -= 1;
        studentClothes[i] += 1;
      }
    }
  }
  for (const student of studentClothes) {
    answer += student > 0 ? 1 : 0; // 학생이 1개 이상 체육복을 가지면 정답에 추가. 
  }
  answer -= 2; // 왜 배열을 2개를 더 만들었나? 처음과 끝의 undefinded가 나오는 것을 방지하려고? 
  return answer;
  
  // reserve와 lost는 정렬 
  // const sortedLosts = lost.sort((a, b) => a - b)
  // const sortedReserve = reserve.sort((a, b) => a - b)
  
  // // 내가 잃어버렸는데, 나에게 여분이 있는 경우 제외
  // let filteredLosts = sortedLosts.filter((elem) => !sortedReserve.includes(elem))
  // let filteredReserve = sortedReserve.filter((elem) => !sortedLosts.includes(elem))
  
  // const length = filteredLosts.length
  // if (!length) return n - length
  
  // // 빌릴 수 있는 범위 내에서 빌려봄
  // for (let i = 0; i < length; i++) {  
      
  //   let prevFriend = lost[i] - 1
  //   let nextFriend = lost[i] + 1
    
  //   // Check if 범위 안에 체육복이 있는지, 왼쪽 -> 오른쪽 
  //   if (filteredReserve.includes(prevFriend)) {
  //     filteredReserve = filteredReserve.filter((el => el !== prevFriend))
  //     filteredLosts = filteredLosts.filter((el => el !== lost[i]))
  //   } else if (filteredReserve.includes(nextFriend)) {
  //     filteredReserve = filteredReserve.filter((el => el !== nextFriend))
  //     filteredLosts = filteredLosts.filter((el => el !== lost[i]))
  //   }
  // }
  
  // return n - filteredLosts.length;
}

console.log(solution(5, [2, 4], [1, 3, 5])) // --> 5명 
console.log(solution(10, [1, 2, 4], [1, 3, 6])) // --> 9명
console.log(solution(3,	[2], [2])) // --> 3명 

// 중복 테스트 케이스
console.log(solution(8,	[5, 6, 7], [4, 5])) // --> 6명

// 정렬 테스트 케이스 
console.log(solution(5,	[2, 4], [3, 1])) // --> 5명
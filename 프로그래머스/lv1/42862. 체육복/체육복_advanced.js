
function solution(n, lost, reserve) {

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
  
}

console.log(solution(5, [2, 4], [1, 3, 5])) // --> 5명 
console.log(solution(10, [1, 2, 4], [1, 3, 6])) // --> 9명
console.log(solution(3,	[2], [2])) // --> 3명 

// 중복 테스트 케이스
console.log(solution(8,	[5, 6, 7], [4, 5])) // --> 6명

// 정렬 테스트 케이스 
console.log(solution(5,	[2, 4], [3, 1])) // --> 5명
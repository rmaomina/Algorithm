function solution(numbers, hand) {
  let answer = '';

  // 누를 키패드와 이전에 누른 위치의 거리를 계산하는게 관건인 것 같다. 
  // 그럼 두 점의 거리를 구하는 식이 푸는데 도움이 될까?? 
  // Math.sqrt(Math.pow((0-3),2) + Math.pow((4-0),2))
  // 0의 위치는 [3, 1], *와 #은 각각 10번, 11번을 주어 초기값으로 넣어둔다. 

  const position = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,2]]

  let leftFinger = 10
  let rightFinger = 11

  numbers.map((num) => {
    if (num === 1 || num === 4 || num === 7) { // 무조건 왼쪽: 3으로 나누어 나머지가 1 (1, 4, 7)
      answer += 'L'
      leftFinger = num
    } else if (num === 3 || num === 6 || num === 9) { // 무조건 오른쪽: 3으로 나누어 나머지가 0 (3, 6, 9)
      answer += 'R'
      rightFinger = num
    } else { // 그 외 가운데 버튼 2, 5, 7, 0
      let left_x = position[leftFinger][0]
      let left_y = position[leftFinger][1]
      let right_x = position[rightFinger][0]
      let right_y = position[rightFinger][1]
      let next_x = position[num][0]
      let next_y = position[num][1]

      // 다른 식을 보니까 Math.abs()를 사용한다. 어떤 차이인지? 
      // 대각선의 거리를 보는 것이 아니라 이동 단위로 보기 때문에 차이가 나는 것!!! 
      // let distLeft = Math.sqrt(Math.pow(left_x - next_x, 2) + Math.pow(left_y - next_y, 2))
      // let distRight = Math.sqrt(Math.pow(right_x - next_x, 2) + Math.pow(right_y - next_y, 2))

      let distLeft = Math.abs(left_x - next_x) + Math.abs(left_y - next_y)
      let distRight = Math.abs(right_x - next_x) + Math.abs(right_y - next_y)

      if (distLeft === distRight) {
        answer += hand[0].toUpperCase()
        hand === 'right'? rightFinger = num: leftFinger = num
      } else if (distRight > distLeft) {
        answer += 'L'
        leftFinger = num
      } else {
        answer += 'R'
        rightFinger = num
      }
    }
  })
  return answer


  // ------------- 첫번째 시도: 문제를 잘못이해하고 너무 어렵게 접근함 --------------------------
  // 만약 147인 경우 L, 369인 경우 R
  // 이전에 각 손으로 눌렀던 버튼을 기억해서 prevLeft, prevRight에 담는다. 
  // 2, 5, 8, 11일 경우, 전에 눌렀던 버튼을 비교해서 어느쪽과 더 가까운지.
  // 같으면 hand인 쪽이 더 우선된다. 
  
  // prevLeft가 1일 때 1, 4, 7, 10 
  // prevLeft가 4일 때 -2, 1, 4, 7
  // prevLeft가 7일 때 -5, -2, 1, 4
  // prevLeft가 10일 때 -8, -5, -2, 1
  
  // prevRight가 3일 때 -1, 2, 5, 8
  // prevRight가 6일 때 -4, -1, 2, 5
  // prevRight가 9일 때 -7, -4, -1, 2
  // prevRight가 12일 때 -10, -7, -4, -1
  
  // 어느 규칙이 있다. 배열의 1 + 3 + 3 + 3 순열 검색을 하면 된다. 
  // let arr = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
  // let hands = 'right'
  // const prev = {
  //     left: 10,
  //     right: 12
  // }
  // const preset = {
  //     left: [0, 1, -2, 0, 4, -5, 0, 7, -8, 0, 10],
  //     right: [0, -1, 2, 0, -4, 5, 0, -7, 8, 0, -10]
  // }
  
  // const saveAnswer = (direction, num) => {
  //     let abbr = direction[0].toUpperCase()
  //     prev[direction] = num
  //     answer += abbr
  //     return abbr
  // }
  
  // numbers.map((number) => {
  //     // 1, 3, 4, 5
  //     // L, R, L,
  //     let num = number === 0?11:number
  //     if (num % 3 === 1) saveAnswer('left', num)
  //     if (num % 3 === 0) saveAnswer('right', num)
      
  //     if (num % 3 === 2) {       
  //         let distLeft = preset.left.filter(operator => (prev.left + operator) === num)
  //         let distRight = preset.right.filter(operator => (prev.right + operator) === num)
          
  //         if (distLeft[0] === distRight[0]) saveAnswer(hand, num)
          
  //         if (distLeft[0] > distRight[0]) {
  //             saveAnswer('left', num)
  //         } else {
  //             saveAnswer('right', num)
  //         }
  //     }
  // })
  // return answer;

}

// 해설 참고: https://tech.kakao.com/2020/07/01/2020-internship-test/
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // --> "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) // --> "LRLLRRLLLRR"
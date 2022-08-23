function solution(numbers, hand) {
  let answer = '';

  const position = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,2]]

  let leftFinger = 10
  let rightFinger = 11
debugger;
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
}
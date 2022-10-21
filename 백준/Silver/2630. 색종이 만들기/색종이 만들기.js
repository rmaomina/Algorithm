// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let [N, ...paper] = input

// 첫째 줄에는 잘라진 햐얀색 색종이의 개수를 출력하고, 
// 둘째 줄에는 파란색 색종이의 개수를 출력

paper = paper.map(el => el.split(' ').map(Number))
let blue = 0
let white = 0

// 구역별로 (r, c), (r, c + N/2), (r + N/2, c), ...(r + N/2, c + N/2) 검사
// if 색종이를 만들 수 있으면 count++ 
// else 만들 수 없으면 N을 2로 나눈 범위를 반복
// 정방형 모양만 존재하므로 size를 같이 전달 

const quadrant = (r, c, n) => {
  // 해당 base 좌표부터 N 사이즈까지 같은 색인지 확인 
  if (isFilledSameColor(r, c, n)) {
    // 같은 색이라면 색상이 뭔지 확인 
    if (paper[r][c] === 1) blue++
    else white++
    return 
  } 
  // 다른 색이 섞여 있다면 색종이로 못만듬 -> 다시 사분면으로 확인 
  let half = n / 2
  // 1분면 (좌상)
  quadrant(r, c, half)
  // 2분면 (우상)
  quadrant(r, c + (half), half)
  // 3분면 (좌하)
  quadrant(r + (half), c, half)
  // 4분면 (우하)
  quadrant(r + (half), c + (half), half)
}

const isFilledSameColor = (r, c, n) => {
  const base = paper[r][c] // 분할된 면의 왼쪽 상단 요소 (임의) 
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (base !== paper[i][j]) return false
    }
  }
  return true
}

quadrant(0, 0, +N)

console.log(`${white}\n${blue}`)

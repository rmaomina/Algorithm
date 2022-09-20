
// 블로그 링크 https://velog.io/@rmaomina/recursion-hanoi
let count = 0

const hanoi = (num, from, to, sub) => { // 원판갯수, 출발, 목적, 보조 
  if (num === 0) return
  hanoi (num - 1, from, sub, to)
  console.log(`${num}번 원판을 ${from}번에서 ${to}로 옮긴다.`)
  count++
  hanoi (num - 1, sub, to, from)
  return count
}

hanoi(3, 'a', 'b', 'c') // 2^3-1 ==> 7





function solution(numbers) {
  let collection = []
  
  // 2랑 1,3,4,1 더하기
  // 1이랑 3,4,1 더하기 
  // 3이랑 4,1 더하기
  // 4랑 1 더하기 
  // 모든 배열을 new Set으로 중복 제거함. 
  
  function recursion (arr) { // 2,1,3,4,1
    let [first, ...rest] = arr // 2, 1, 3, 4
    if (rest.length === 0) return 
      console.log('first: '+ first)
      rest.reduce((acc, cur) => { // 1, 3, 4, 1 // 3, 4, 1 // 4, 1 // 1
          collection.push(first + cur) // 2, 5, 6, 3 // 4, 5, 2 // 7, 4 // 5
          console.log('cur: ' + cur)
          console.log('res: ' + (first + cur))
          console.log('\n')
          return cur                           
      }, 1)
      return recursion(rest)
  }
  
  recursion(numbers)
  let result = new Set(collection)
  let sorted = [...result].sort((a,b) => a - b)

  return sorted
}
const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  
  // arr를 sort하고 3번째 요소까지의 곱을 반환 
  // 하지만 음수 * 음수가 양의 정수가 될 수 있기 때문에 
  // 두가지 경우 중 더 큰 쪽을 반환한다. 

  const sorted = arr.sort((a, b) => a - b)
  const len = sorted.length

  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3]
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1]

  return Math.max(candi1, candi2)
};

// [Done] exited with code=0 in 0.249 seconds

console.log(largestProductOfThree([0, 1, 2, 3])); // --> 6 (= 1 * 2 * 3)
console.log(largestProductOfThree([2, 1, 3, 7])); // --> 42 (= 2 * 3 * 7)
console.log(largestProductOfThree([-8, -5, -1, 2, 4, 6, 7])); // --> 280 (= -8 * -5 * 7)
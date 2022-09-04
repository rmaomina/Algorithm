const swap = (idx1, idx2, arr) => {
  // 3. XOR 연산을 활용 (참조형이라 가능)
  arr[idx1] ^= arr[idx2]
  arr[idx2] ^= arr[idx1]
  arr[idx1] ^= arr[idx2]
}

const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length; i++) {
    // 어떤 요소도 swap되지 않았다면, 이미 배열은 정렬된 것이다. 
    let swaps = false;

    // 매 반복마다 i번째 요소가 가장 큰
    // i가 2일 때(두번째 반복할 때), 이미 정렬된 i번째 배열은 검사할 필요가 없다. 
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps = true
        swap(j, j+1, arr)
      }
    }
    if (!swaps) break
  }

  return arr
};

console.log(bubbleSort([10,23,8,5,4]))
console.log(bubbleSort([10,8,5,4,23,5,9,7,8,14,55,2]))
console.log(bubbleSort([104,8,5,4,23,5,9,7,8,14,5,1]))
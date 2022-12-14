const swap = (idx1, idx2, arr) => {
  // 두 변수를 바꾸는 방법 
  // 1. 내가 사용한 방법 임시 교체 
  // temp = arr[idx1]
  // arr[idx1] = arr[idx2]
  // arr[idx2] = temp

  // 2. 구조분해할당을 활용 (참조형이라 가능)
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

  // 3. XOR 연산을 활용 (참조형이라 가능)
  // arr[idx1] ^= arr[idx2]
  // arr[idx2] ^= arr[idx1]
  // arr[idx1] ^= arr[idx2]
}

const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j+1, arr)
      }
    }
  }

  return arr
};

console.log(bubbleSort([10,23,8,5,4]))
console.log(bubbleSort([10,8,5,4,23,5,9,7,8,14,55,2]))
console.log(bubbleSort([104,8,5,4,23,5,9,7,8,14,5,1]))
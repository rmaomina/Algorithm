const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  // 1. 첫번째 내 코드 (실행시간 초과)
  // return sample.every(el => base.includes(el))

  // 2. 배열을 정렬한 후, 검사할 숫자보다 크면 없는 것.
  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  // base 배열의 이전에 마지막 검사한 baseIndex로 범위를 좁힌다. 
  const findItemInBase = (target, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (target === arr[i]) return i // 인덱스 반환 --> 넘어가는 것 
      else if (target < arr[i]) return -1 // base가 커질 때까지 못찾았으니 -1을 반환
    }
    return -1
  }
  
  let baseIndex = 0

  for (let i = 0; i < sample.length; i++) {
    baseIndex = findItemInBase(sample[i], base, baseIndex)
    if (baseIndex === -1) return false
  }

  return true
};

console.log(isSubsetOf([10, 23, 8, 5, 4], [10, 8])) // true
console.log(isSubsetOf([1, 2, 3, 4, 5], [1, 3])) // true
console.log(isSubsetOf([10, 5, 4, 23, 2], [10, 2])) // true
console.log(isSubsetOf([104, 8, 5, 4, 237, 8, 14, 1],[104, 13])) // false
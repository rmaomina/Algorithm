function solution(n, times) {

  let min = 1
  let max = Math.max(...times) * n
  
  while (min <= max) { // 1 <= 60
    const mid = Math.floor((min + max) / 2);
    // 31 / 7 + 31 / 10 = 7
    // 중간 시간을 심사대1과 2로 나눈 것의 합 = 처리할 수 있는 사람의 수 
    const sum = times.reduce((acc, cur) => { // 0, 7
        return acc + Math.floor(mid / cur) 
    }, 0);

    if (sum < n) min = mid + 1;
    else max = mid - 1;
  }

  return min;
}

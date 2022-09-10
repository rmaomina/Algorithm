function solution(n) {
    return n
    .toString() // "12345"
    .split("") // ["1","2","3"...]
    .reverse() // ["5","4","3"...]
    .map((x) => parseInt(x)); // [5, 4, 3, 2, 1]
}
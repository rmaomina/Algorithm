const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const [first, ...temp] = input

let arr = temp.map(el => Number(el))
function insertion (arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i] 
    let left = i - 1 
    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left]
      arr[left] = cur
      left--
    }
  }
  console.log(arr.join('\n'))
}

insertion(arr)
const path = __dirname + "/input_boj1.txt";
// const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

let arr = input.slice(1).map(Number)

let result = []
let answer = ''

const heapSort = (array) => {
  let size = array.length
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(array, size, i)
  }
  return array
}

const heapify = (array, size, root) => {
  let largest = root
  const left = 2 * root + 1
	const right = 2 * root + 2
	let temp

  if (left < size && array[left] > array[largest]) {
		largest = left
	}
  if (right < size && array[right] > array[largest]) {
        largest = right
  }

  if (largest !== root) {
		temp = array[root]
		array[root] = array[largest]
		array[largest] = temp

		heapify(array, size, largest)
	}
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    if (result.length === 0) {
      answer += '0\n' 
    } else {
      maxHeapArr = heapSort(result)
      answer += `${maxHeapArr.slice(0, 1)}\n`
      result = maxHeapArr.slice(1)
    }
  } else {
    result.push(arr[i])
  }
}
console.log(answer)

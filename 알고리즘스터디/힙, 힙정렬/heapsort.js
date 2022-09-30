/** @format */
// https://algorithm-visualizer.org/brute-force/heapsort

function heapSort(array, size) {
	let i
	let j
	let temp

  // 4, 3, 2, 1 인덱스를 루트로 가져가는 이유는?? -> 자식 노드 계산 방식 때문에 
  // 가장 하위 레벨에 있는 자식 레벨은 루트로 가져가 봐야 비교 대상이 없으니까. 
  // 중간에 위치한 인덱스가 루트할 경우 자식 노드 left, right 범위에 인접. 
	for (i = Math.floor(size / 2) - 1; i >= 0; i--) {
		heapify(array, size, i)
	}

  console.log('---여기까지 최대 힙 조건 완성---')
  console.log(array)
  console.log('---여기까지 최대 힙 조건 완성---')

  // 9, 8, 7, ... 0번 인덱스로 내림차순으로 진행 > 정렬이 끝난 요소 제외하기 위해서 
  // "최대 힙의 가장 큰 조건 부모는 자식보다 무조건 크다"를 이용해서 
  // 가장 첫번째 루트(부모)를 가장 뒤로 보낸다. (루트는 정렬 끝)
	for (j = size - 1; j >= 0; j--) {
		temp = array[0]
		array[0] = array[j]
		array[j] = temp

    // 이미 정렬이 된 0번 idx와 교체해준, (단정할 순 없지만 가장 작은) 노드를 루트로 두고
    // 다시 최대 힙 정렬. 이미 정렬이 끝난 요소가 있기 때문에 size는 줄어듬. 
		heapify(array, j, 0)
	}
}

function heapify(array, size, root) {
  console.log(`\n** root가 idx ${root}인 ${array[root]}이 부모노드일 때, 자식 노드와 비교 & 위치 교체`)
  console.log('교체 전')
  console.log(array)
  // 정렬되지 않은 배열을 최대힙트리 구조로 만들어 준다. 
  // 루트를 가장 '큰'인덱스(가정)에 넣고 (현재 root index0),
	let largest = root
  // 자식 노드의 left idx, right idx를 계산한다. 
	const left = 2 * root + 1
	const right = 2 * root + 2
  // 만약 루트보다 더 큰 자식이 담길 경우 swap을 위한 변수 temp
	let temp

  // 왼쪽, 오른쪽이 자식노드가 될 배열이 남아 있으면,
  // array의 left번째와 array의 largeset번째(현재 index0)를 비교한다. 
  // 부모보다 큰 자식 노드가 생겼는지 확인하고 만약 그렇다면, largest를 변경한다.
	if (left < size && array[left] > array[largest]) {
		largest = left
	}
	if (right < size && array[right] > array[largest]) {
		largest = right
	}

  // 만약 가장'큰'인덱스가 부모가 아니라면 왼쪽, 오른쪽 자식 두 경우 만족하기 위해서 
  // 다시 재귀를 반복한다. 이번엔 바꾼 largest를 root로. 
	if (largest !== root) {
		temp = array[root]
		array[root] = array[largest]
		array[largest] = temp

    console.log('교체 후')
    console.log(array)
		heapify(array, size, largest)
	}
}

heapSort([13, 20, 7, 1, 3, 4, 2, 8, 9, 10], 10)
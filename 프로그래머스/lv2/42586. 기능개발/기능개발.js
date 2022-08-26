/** @format */

function solution(progresses, speeds) {
	let workdays = []
	let len = progresses.length

	for (let i = 0; i < len; i++) {
		let prog = progresses[i]

		let day = 1
		while (true) {
			// 작업이 100이거나 이상이면 끝난거
			if (prog >= 100) break
			prog = prog + speeds[i]
			day += 1
		}
		// workdays 배열에는 작업에 걸린 기간을 넣는다.
		workdays.push(day)
	}

	// 1일 1(speeds)시 걸리는 최대 일수 = 100 (보다 1많게)
	// reduce할 때 마지막엔 비교할 숫자가 없어서 추가.
	workdays.push(101)

	let answer = []
	let release = 1
	let std = workdays[0]

	// 초기값이 없어야 함. 그래야 cur는 1번째 index로
	// acc = workdays[0], cur = workdays[1] 부터 비교할 수 있음.
	// 그래서 release도 초기값이 1, 마지막엔 비교만 하고 바로 push함.
	workdays.reduce((acc, cur) => {
		if (std >= cur) {
			release += 1
		} else {
			answer.push(release)
			release = 1
			// cur값이 acc(이전)값보다 크면 비교를 위해 다시 std에 할당.
			std = cur
		}
		return cur
	})

	return answer
}

// 작업하는데 걸리는 날, [8, 4, 10]
console.log(solution([93, 30, 55], [1, 30, 5])) //[2, 1]
console.log(solution([96, 94], [3, 3])) // [2]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])) // []
console.log(solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1]))

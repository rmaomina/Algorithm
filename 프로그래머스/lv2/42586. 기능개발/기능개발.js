/** @format */

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와
// 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
// 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수

function solution(progresses, speeds) {
	let workdays = []
	let len = progresses.length

	for (let i = 0; i < len; i++) {
		// 작업 전체 반복
		let prog = progresses[i]

		// 넘 어렵게 생각하지 말자!
    // 하루는 기본 1일부터 
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
	workdays.push(101)
  console.log(workdays)

	let answer = []
	let release = 1
	let std = workdays[0]

  workdays.reduce((acc, cur) => {
    if (std >= cur) {
			release += 1
		} else {
			answer.push(release)
			release = 1
			std = cur
		}
    return cur
  })
  
  // for 문으로 먼저 풀었다가 reduce로 바꿈 
	// for (let i = 0; i < len; i++) {
	// 	if (std >= workdays[i + 1]) {
	// 		release += 1
	// 	} else {
	// 		answer.push(release)
	// 		release = 1
	// 		std = workdays[i + 1]
	// 	}
	// }

	return answer
}

// 작업하는데 걸리는 날, [8, 4, 10]
console.log(solution([93, 30, 55, 1], [1, 30, 5, 1])) //[2, 1]
// console.log(solution([96, 94], [3, 3])) 
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
// console.log(solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1]))
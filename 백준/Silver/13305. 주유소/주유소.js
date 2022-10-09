// 주유소 그리디 (내채점: 58점 -> 100점)
// 차이점은?? BigInt, 숫자 0n & String()
const path = __dirname + '/input_boj1.txt'
// const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const dist = input[1].split(' ').map((i) => BigInt(i))
const cost = input[2].split(' ').map((i) => BigInt(i))

solution(dist, cost)

function solution(dist, cost) {
	let cheapest = cost[0]
	let totalPrice = 0n

	for (let i = 0; i < dist.length; i++) {
		totalPrice += cheapest * dist[i]
		if (cheapest > cost[i + 1]) cheapest = cost[i + 1]
	}

	console.log(String(totalPrice))
}

// 레퍼런스 (채점: 100점)

// distances = distances.split(' ').map((i) => BigInt(i));
// cities = cities.split(' ').map((i) => BigInt(i));
// solution(distances, cities);

// function solution(distances, cities) {
// 	let answer = 0n;
// 	let nowOliPrice = cities[0];

// 	for (let i = 0; i < distances.length; i += 1) {
// 		answer += nowOliPrice * distances[i];

// 		if (nowOliPrice > cities[i + 1]) nowOliPrice = cities[i + 1];
// 	}

// 	console.log(String(answer));
// }

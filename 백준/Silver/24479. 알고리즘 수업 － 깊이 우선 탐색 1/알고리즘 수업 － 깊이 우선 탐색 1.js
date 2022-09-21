const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const [nodeCount, edgeCount, rootNode] = input[0].split(' ').map((i) => Number(i))
const edge = input.slice(1).map((e) => e.split(' ').map(Number))

const graph = new Map()
edge.forEach(([from, to]) => {
    if (graph.has(from)) graph.get(from).push(to)
    else graph.set(from, [to])
    if (graph.has(to)) graph.get(to).push(from)
    else graph.set(to, [from])
})

let count = 1
const visited = new Array(nodeCount + 1)
const answer = new Array(nodeCount).fill(0)

const dfs = ((rootNode) => {
    visited[rootNode] = true
    answer[rootNode - 1] = count++
    if (!graph.has(rootNode)) return
    const nodes = [...graph.get(rootNode)].sort((a, b) => a - b)
    for (let node of nodes) {
        if (!visited[node]) {
            dfs(node)
        }
    }
})

dfs(rootNode)
console.log(answer.join('\n'))


// 첫번째 시도 왜 DFS 런타임 에러???
// const input = require('fs')
// 	.readFileSync(__dirname + '/input_boj.txt')
// 	.toString()
// 	.trim()
// 	.split('\n')
// // N, M, R

// let [first, ...rest] = input
// const [nodeCount, edgeCount, rootNode] = first.split(' ').map(Number)
// const edge = rest.map((e) => e.split(' ').map(Number))

// const graph = new Map() // {}
// edge.forEach(([from, to]) => {
// 	if (graph.has(from)) graph.get(from).push(to)
// 	else graph.set(from, [to])
// 	if (graph.has(to)) graph.get(to).push(from)
// 	else graph.set(to, [from])
// })

// let count = 1
// const visited = new Array(nodeCount + 1) // 노드 갯수 + 1 -> 루트노드가 1이라서 
// const answer = new Array(nodeCount).fill(0)

// const dfs = (rootNode) => {
// 	visited[rootNode] = true
// 	answer[rootNode - 1] = count++
// 	if (!graph.has(rootNode)) return
// 	const nodes = [...graph.get(rootNode)].sort((a, b) => a - b)
// 	for (let node of nodes) {
// 		if (!visited[node]) dfs(node)
// 	}
// }

// dfs(rootNode)
// console.log(answer.join('\n'))

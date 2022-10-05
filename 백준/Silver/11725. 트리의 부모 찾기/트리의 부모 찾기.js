// const path = __dirname + "/input_boj2.txt";
const path = '/dev/stdin'

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();
const nodes = input.map(el => el.split(' ').map(Number))

const tree = [...Array(N + 1)].map(() => []);

nodes.forEach(([from, to]) => {
	tree[from].push(to)
	tree[to].push(from)
});

let visited = Array(N + 1).fill(0)

const bfs = () => {
  const queue = []
	visited[1] = 1

	for (let next of tree[1]) {
		visited[next] = 1
		queue.push(next)
	}
  
	while (queue.length) {
		const node = queue.shift()
		for (let next of tree[node]) {
			if (visited[next]) continue;
			visited[next] = node 
			queue.push(next)
		}
	}
}

bfs();

let result = '';
visited = visited.slice(2);
visited.map((v) => (result += `${v}\n`)); 

console.log(result);

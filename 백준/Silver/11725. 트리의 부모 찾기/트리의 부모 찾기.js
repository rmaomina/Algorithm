
const path = __dirname + "/input_boj2.txt";
// const path = '/dev/stdin'

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();
const nodes = input.map(el => el.split(' ').map(Number))

// 루트가 1번이기 때문에 인덱스를 맞춰주기 위해서 
const tree = [...Array(N + 1)].map(() => []);

nodes.forEach(([from, to]) => {
	tree[from].push(to)
	tree[to].push(from)
});
console.log(tree)

let visited = Array(N + 1).fill(0)
console.log(visited)

const bfs = () => {
  const queue = []
	visited[1] = 1

  // 1번 인덱스의 요소(연결된 노드)를 방문한 노드로 먼저 넣어준다. 
  // queue가 비어있으면 안되기 때문에 
	for (let next of tree[1]) {
		visited[next] = 1
		queue.push(next)
	}
  
	while (queue.length) {
		const node = queue.shift()
    // 큐에서 처리할 현재 노드와, tree에서 현재 노드가 가리키는 연결 노드들을 전부 큐에 넣는다. 
		for (let next of tree[node]) {
			// 노드를 순회하면서, 방문한 노드라면 건너뛴다.
			if (visited[next]) continue;
      // 방문하지 않은 노드라면, 자식노드의 인덱스에 현재 위치한 노드 요소(부모)를 넣는다.  
			visited[next] = node 
			queue.push(next)
		}
	}
}

bfs();

let result = '';
visited = visited.slice(2);
visited.map((v) => (result += `${v}\n`)); // 체크 배열의 2번 인덱스(2번 노드)부터 출력한다.

console.log(result);

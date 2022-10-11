// 백준 트리 순회 
const path = __dirname + "/input_boj.txt";
// const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const nodes = input.slice(1)

let tree = {}
let answer = ''
let root = 'A'

const preorder = (node) => {
  if (node === '.') return 
  const [left, right] = tree[node]
  answer += node
  preorder(left)
  preorder(right)
}

const inorder = (node) => {
  if (node === '.') return
  const [left, right] = tree[node]
  inorder(left)
  answer += node
  inorder(right)
}

const postorder = (node) => {
  if (node === '.') return 
  const [left, right] = tree[node]
  postorder(left)
  postorder(right)
  answer += node
}

nodes.map(el => {
  let [value, left, right] = el.split(' ')
  tree[value] = [left, right]
})

preorder(root)
answer += '\n'
inorder(root)
answer += '\n'
postorder(root)

console.log(answer)

const fs=require('fs')
let input=fs.readFileSync('/dev/stdin').toString().split('\n')
v=input[0].split(' ').map(x=>+x)
h=parseInt(v[0])
m=parseInt(v[1])
s=parseInt(v[2])
n=parseInt(input[1])
sum=s+n
m=m+parseInt(sum/60)
sum%=60
h=h+parseInt(m/60)
m%=60
h%=24
console.log("%d %d %d",h,m,sum)

// 찾아본 레퍼로는 테스트가 통과가 안되는데 ;; 
// 아래 내 코드는 테케는 통과하지만 채점이 틀렸다고 나옴 

// const input = require('fs').readFileSync(path).toString().trim().split('\n')
// const [h, m, s] = input[0].split(' ').map(BigInt)
// const totalSeconds = BigInt(input[1]) + (h * 3600n + m * 60n + s)

// const seconds = totalSeconds % 60n
// const minutes = (totalSeconds - seconds) / 60n % 60n
// let hours = (totalSeconds - minutes * 60n - seconds) / 3600n

// if (hours > 23n) hours = 0n

// console.log(`${String(hours)} ${String(minutes)} ${String(seconds)}`)
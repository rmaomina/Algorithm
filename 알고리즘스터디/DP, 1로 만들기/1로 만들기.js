function makeOne (num) {
  // dp

  const dp = new Array(num + 1).fill(0);
  
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);	
    }

    if (i % 5 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 5] + 1);	
    }
  }
  console.log(dp)

  return dp[num]
}

console.log(makeOne(26)) 
console.log(makeOne(13)) 
console.log(makeOne(30000)) 
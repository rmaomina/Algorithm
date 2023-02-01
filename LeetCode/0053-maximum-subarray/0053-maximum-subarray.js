// solved Brute-Force 1
var maxSubArray_BF1 = function(nums) {
  if (nums=== null || nums.length === 0) return 0

  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let currSum = 0;
      for (let k = i; k <= j; k++) {
        currSum += nums[k];
      }
      maxSum = Math.max(maxSum, currSum)
    }
  }
  return maxSum
}

// solved Brute-Force 2
var maxSubArray_BF2 = function(nums) {
  if (nums=== null || nums.length === 0) return 0

  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j];
      maxSum = Math.max(maxSum, currSum)
    }
  }
  return maxSum
}

// solved DP 1
var maxSubArray_DP1 = function(nums) {
  if (nums=== null || nums.length === 0) return 0

  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  console.log(dp)
  return Math.max(...dp);
}

// solved DP 2 (Kadane's)
var maxSubArray_DP2 = function(nums) {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(currSum, maxSum)
    console.log(currSum, maxSum)
  }
  return maxSum;
};

// solved DP 3 (Kadane's)
var maxSubArray_DP3 = function(nums) {
  // Initialize the max sum...
  let maxSum = nums[0];

  // Traverse all the element through the loop...
  for (let i = 1; i < nums.length; i++) {
    // nums[i] represents the largest sum of all subarrays ending with index i...
    // then its value should be the larger one between nums[i]...
    // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
    // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    // if nums[i] > maxSum then maxSum = nums[i]...
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }
  }
  return maxSum;      // return the contiguous subarray which has the largest sum...
};

const testCase = [-2,1,-3,4,-1,2,1,-5,4]; // [4, -1, 2, 1]

console.log(maxSubArray_DP3(testCase))

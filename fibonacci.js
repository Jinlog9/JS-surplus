// 반복문 구현
const repeatFibonacci = (nums) => {
  if (nums === 1 || nums === 2) return 1;

  let prev = 1;
  let cur = 1;
  let sum = 0;
  for (let i = 3; i <= nums; i++) {
    sum = prev + cur;
    prev = cur;
    cur = sum;
  }
};

repeatFibonacci(10);

// 재귀 구현
const recurFibonacci = (nums) => {
  if (nums === 1 || nums === 2) return 1;

  return recurFibonacci(nums - 1) + recurFibonacci(nums - 2);
};

recurFibonacci(10);

// DP 구현

const dpFibonacci = (nums) => {
  const dp = new Array(nums).fill(1);

  for (let i = 3; i <= nums; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[nums - 1];
};

dpFibonacci(10);

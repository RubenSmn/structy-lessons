// problem from
// https://www.structy.net/problems/non-adjacent-sum

const nonAdjacentSum = (nums, n = 0, memo={}) => {
  if (n in memo) return memo[n];
  if (n >= nums.length) return 0;

  const include = nums[n] + nonAdjacentSum(nums, n + 2, memo);
  const exclude = nonAdjacentSum(nums, n + 1, memo);
  const max = Math.max(include, exclude);
  memo[n] = max;
  return max;
};

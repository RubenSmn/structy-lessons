// problem from
// https://www.structy.net/problems/sum-possible

const sumPossible = (amount, numbers, memo={}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];

  for (const num of numbers) {
    if(sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};

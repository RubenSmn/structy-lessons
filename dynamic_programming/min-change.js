// problem from
// https://www.structy.net/problems/min-change

const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  if (answer === Infinity) return -1;
  return answer;
};

const _minChange = (amount, coins, memo={}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  
  let coinCount = Infinity;
  
  for (const coin of coins) {
    const newCount = 1 + _minChange(amount - coin, coins, memo);
    coinCount = Math.min(coinCount, newCount);
  }
  
  memo[amount] = coinCount;
  return coinCount;
};

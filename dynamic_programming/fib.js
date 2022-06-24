// problem from
// https://www.structy.net/problems/fib

const fib = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return n;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

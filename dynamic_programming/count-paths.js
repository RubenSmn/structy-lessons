// problem from
// https://www.structy.net/problems/count-paths

const countPaths = (grid, r=0, c=0, memo={}) => {
  if (`${r},${c}` in memo) return memo[`${r},${c}`];
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;

  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

  const downCount = countPaths(grid, r + 1, c, memo);
  const rightCount = countPaths(grid, r, c + 1, memo);

  memo[`${r},${c}`] = downCount + rightCount;

  return downCount + rightCount;
};

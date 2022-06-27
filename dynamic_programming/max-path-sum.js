// problem from
// https://www.structy.net/problems/max-path-sum

const maxPathSum = (grid, r=0, c=0, memo={}) => {
  if (`${r},${c}` in memo) return memo[`${r},${c}`];
  if (r === grid.length || c === grid[0].length) return -Infinity;

  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  const downCount = maxPathSum(grid, r + 1, c, memo);
  const rightCount = maxPathSum(grid, r, c + 1, memo);

  memo[`${r},${c}`] = grid[r][c] + Math.max(downCount, rightCount);

  return grid[r][c] + Math.max(downCount, rightCount);
};

// problem from
// https://www.structy.net/problems/minimum-island

const minimumIsland = (grid) => {
  let minimum = Infinity;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < minimum) minimum = size;
    }
  }
  return minimum;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 'W') return 0;
  
  const pos = `${r},${c}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  
  let count = 1;

  count += explore(grid, r - 1, c, visited);
  count += explore(grid, r + 1, c, visited);
  count += explore(grid, r, c - 1, visited);
  count += explore(grid, r, c + 1, visited);

  return count;
};

// problem from
// https://www.structy.net/problems/largest-component

// depth first
const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (let node in graph) {
    const count = explore(graph, node, visited);
    if (count > largest) largest = count;
  }
  return largest;
};

const explore = (graph, src, visited) => {
  if (visited.has(String(src))) return 0;
  visited.add(String(src));

  let count = 1;
  for (let neighbor of graph[src]) {
    count += explore(graph, neighbor, visited);
  }

  return count;
};

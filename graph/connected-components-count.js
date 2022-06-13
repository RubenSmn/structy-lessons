// problem from
// https://www.structy.net/problems/connected-components-count

// depth first
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

const explore = (graph, src, visited) => {
  if (visited.has(String(src))) return false;
  visited.add(String(src));

  for (let neighbor of graph[src]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

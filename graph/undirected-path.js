// problem from
// https://www.structy.net/problems/undirected-path

// depth first
const hasPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const stack = [nodeA];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (visited.has(curr)) continue;
    visited.add(curr);
    if (curr === null) continue;
    if (curr === nodeB) return true;
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// breadth first
const hasPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [nodeA];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (visited.has(curr)) continue;
    visited.add(curr);
    if (curr === null) continue;
    if (curr === nodeB) return true;
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// build graph
const buildGraph = (edges) => {
  const graph = {};
  for (let nodes of edges) {
    const [a, b] = nodes;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

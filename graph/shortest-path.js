// problem from
// https://www.structy.net/problems/shortest-path

// breadth first
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [node, dst] = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    if (node === nodeB) return dst;
    for (let neighbor of graph[node]) {
      queue.push([neighbor, dst + 1]);
    }
  }
  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let nodes of edges) {
    const [a,b] = nodes;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

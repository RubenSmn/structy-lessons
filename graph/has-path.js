// problem from
// https://www.structy.net/problems/has-path

// depth first
const hasPath = (graph, src, dst) => {
  const stack = [src];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === null) continue;
    if (curr === dst) return true;
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// breadth first
const hasPath = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr === null) continue;
    if (curr === dst) return true;
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
  return false;
};

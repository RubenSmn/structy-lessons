// problem from
// https://www.structy.net/problems/depth-first-values

// iterative approach
const depthFirstValues = (root) => {
  let visited = [];
  let stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === null) continue;
    visited.push(curr.val);
    stack.push(curr.right);
    stack.push(curr.left);
  }
  return visited;
};

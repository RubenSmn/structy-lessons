// problem from
// https://www.structy.net/problems/depth-first-values

// iterative approach
const depthFirstValues = (root) => {
  if (root === null) return [];
  let visited = [];
  let stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    visited.push(curr.val);
    if (curr.right !== null) stack.push(curr.right);
    if (curr.left !== null) stack.push(curr.left);
  }
  return visited;
};

// recursive approach
const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [ root.val, ...leftValues, ...rightValues ];
};

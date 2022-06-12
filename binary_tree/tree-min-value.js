// problem from
// https://www.structy.net/problems/tree-min-value

// iterative approach
// breadth first
const treeMinValue = (root) => {
  let minVal = Infinity;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val < minVal) minVal= node.val;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
  return minVal;
};

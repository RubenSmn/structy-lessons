// problem from
// https://www.structy.net/problems/tree-includes

// iterative approach
// breadth first
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) return true;
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  return false;
};

// recursive approach
// depth first
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

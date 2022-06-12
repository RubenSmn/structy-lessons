
// problem from
// https://www.structy.net/problems/tree-includes

// iterative approach
// breadth first
const treeSum = (root) => {
  let sum = 0;
  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr === null) continue;
    queue.push(curr.left);
    queue.push(curr.right);
    sum += curr.val;
  }
  return sum;
};

// recursive approach
// depth first
const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

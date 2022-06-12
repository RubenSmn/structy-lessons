// problem from
// https://www.structy.net/problems/sum-tree

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

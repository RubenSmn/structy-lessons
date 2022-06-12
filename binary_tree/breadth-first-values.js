// problem from
// https://www.structy.net/problems/breadth-first-values

// iterative approach
const breadthFirstValues = (root) => {
  let queue = [root];
  let values = [];
  while (queue.length > 0) {
    const curr = stack.shift();
    if (curr === null) continue;
    values.push(curr.val);
    queue.push(curr.left);
    queue.push(curr.right);
  }
  return values;
};

// breadth first should only really be executed in a iterative way
// this because it needs a queue
// the recursive approach uses kinda a stack under the hood

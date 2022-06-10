// problem from
// https://www.structy.net/problems/linked-list-values

// iterative approach
const linkedListValues = (head) => {
  const arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
};

// problem from
// https://www.structy.net/problems/linked-list-find

// iterative approach
const linkedListFind = (head, target) => {
  let curr = head;
  while (curr !== null) {
    if (curr.val === target) return true;
    curr = curr.next;
  }
  return false;
};

// recursive approach
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};

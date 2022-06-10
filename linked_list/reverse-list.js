// problem from
// https://www.structy.net/problems/reverse-list

// iterative approach
// time O(n)
// space O(1)
const reverseList = (head) => {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// recursive approach
// time O(n)
// space O(n)
const reverseList = (head, prev=null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

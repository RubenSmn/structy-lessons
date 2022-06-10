// problem from
// https://www.structy.net/problems/get-node-value

// iterative approach
const getNodeValue = (head, index) => {
  let curr = head;
  while (index > 0) {
    if (curr === null) return null;
    curr = curr.next;
    index--;
  }
  return curr.val;
};

// recursive approach
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  index--;
  return getNodeValue(head.next, index);
};

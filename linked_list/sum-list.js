// problem from
// https://www.structy.net/problems/sum-list

// iterative approach
const sumList = (head) => {
  let sum = 0;
  let curr = head;
  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
};

// recursive approach
const sumList = (head, sum=0) => {
  if (head === null) return sum;
  sum += head.val;
  return sumList(head.next, sum);
};

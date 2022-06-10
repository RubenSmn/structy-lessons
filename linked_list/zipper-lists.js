// problem from
// https://www.structy.net/problems/zipper-lists

// iterative approach
const zipperLists = (head1, head2) => {
  let curr = head1;
  let next = head2;
  while (curr !== null) {
    if (next === null) break;
    const temp = curr.next;
    curr.next = next;
    curr = next;
    next = temp;
  }
  return head1;
};

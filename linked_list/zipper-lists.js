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

// recursive approach
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

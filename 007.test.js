const LinkedList = require('./007');
// Validate reverseBetween on an empty list
it('confirms no changes on an empty list', () => {
  const list = new LinkedList(1);
  list.makeEmpty();
  list.reverseBetween(0, 1);
  expect(list.length).toBe(0);
});

// Validate single-element list remains unchanged
it('confirms single-element list remains unchanged', () => {
  const list = new LinkedList(1);
  list.reverseBetween(0, 0);
  expect(list.length).toBe(1);
});

// Validate that the head is changed when reversed
it('confirms head change when reverse includes head', () => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);
  list.reverseBetween(0, 1);
  expect(list.head.value).toBe(2);
});

// Validate that the tail is changed when reversed
it('confirms tail change when reverse includes tail', () => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);
  list.reverseBetween(1, 2);
  let current = list.head;
  while (current.next !== null) {
      current = current.next;
  }
  expect(current.value).toBe(2);
});

// Validate that nodes are reversed correctly
it('confirms nodes reversed between m and n', () => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.reverseBetween(1, 3);
  const values = [];
  let current = list.head;
  while (current !== null) {
      values.push(current.value);
      current = current.next;
  }
  expect(values).toEqual([1, 4, 3, 2, 5]);
});
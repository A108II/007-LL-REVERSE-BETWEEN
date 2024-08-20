## Reversing Nodes Between Indexes in a Linked List

### Objective
Implement a function called `reverseBetween(m, n)` that reverses the nodes between indexes `m` and `n` (inclusive) in a linked list.

### Assumptions
- The linked list class does not have a tail pointer, which simplifies the implementation.
- `m` and `n` are guaranteed to be within the bounds of the linked list.

### Output
The function should reverse the nodes between indexes `m` and `n` in the linked list. The reversal should be done in-place.

### Constraints
- Additional data structures (such as arrays) are not allowed.
- The existing data structure (the linked list) cannot be modified.
- The linked list can only be traversed once.

### Example 1
Suppose you have a `LinkedList` object, `list`, with the following values:
```
1 -> 2 -> 3 -> 4 -> 5
```

After calling `list.reverseBetween(1, 3)`:
```
list.reverseBetween(1, 3);
```
The linked list should now have the following values:
```
1 -> 4 -> 3 -> 2 -> 5
```

### Example 2
Now suppose you have a `LinkedList` object, `list`, with the following values:
```
1 -> 2 -> 3 -> 4 -> 5 -> 6
```

After calling `list.reverseBetween(3, 5)`:
```
list.reverseBetween(3, 5);
```
The linked list should now have the following values:
```
1 -> 2 -> 3 -> 6 -> 5 -> 4
```

### Implementation Steps
1. **Traverse** the linked list to find the (m-1)th node. This node will be the new head of the reversed sublist.
2. **Find** the mth node, which will be the new tail of the reversed sublist.
3. **Reverse** the sublist between the mth and nth nodes.
4. **Connect** the (m-1)th node to the reversed sublist.
5. **Connect** the reversed sublist to the (n+1)th node.

By following these steps, you can efficiently reverse the nodes between indexes `m` and `n` in the linked list without modifying the data structure or using additional memory.
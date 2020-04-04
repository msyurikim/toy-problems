/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};

var linked = [];
var hasCycle = function(linkedList) {
  // TODO: implement me!
  if (linkedList.next) { //(linkedList.next !== undefined)
    if (linked.includes(linkedList)) {
      return true;
    }
    linked.push(linkedList);
    return hasCycle(linkedList.next);
  } else {
    return false;
  }
};

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true
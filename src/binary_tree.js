// A sorted binary tree for fast lookup, addition and removal of items.

// From [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree) [edited]:

// > A particular type of container that allows fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).
// >
// > Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, based on the comparison, to continue searching in the left or right subtrees.

// ```javascript
// const bst = new BinarySearchTree()
// bst.insert(3)  // inserts a node with the specified value into the tree.
// bst.search(3)  // returns a node object or null if not found.
// bst.remove(3)  // removes an value's node (if exists) from the tree.
// bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
// bst.count()    // return the number of nodes in the tree.
// ```

import Node from './node'

export default class BinarySearchTree {
  constructor() {
    this.root = null
    this._count = 0
  }

  insert(data) {
    const newNode = new Node(data)
    let currentNode = this.root

    if (!currentNode) {
      this.root = newNode
    } else if (this._count === 1) {
      if (currentNode.data < data) {
        currentNode.next = newNode
      } else {
        newNode.next = currentNode
        this.root = newNode
      }
    } else {
      if (currentNode.data >= data) {
        newNode.next = currentNode
        this.root = newNode
      } else {
        let prevNodes = new Node(currentNode.data)
        while (currentNode.data <= data) {
          if (!currentNode.next) {
            currentNode.next = newNode
            prevNodes.next = currentNode
            break
          } else {
            prevNodes.setNext(currentNode.data)
            currentNode = currentNode.next
            newNode.next = currentNode
            prevNodes.next = newNode
          }
        }
        this.root = prevNodes
      }
    }
    this._count++
  }

  search(data) {

  }

  remove(data) {

  }

  traverse(value) {
    // console.log(value)
  }

  count() {
    return this._count
  }
}
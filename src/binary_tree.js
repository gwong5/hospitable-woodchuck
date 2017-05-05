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

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
    this._count = 0
  }

  insert(data) {
    let newNode = new Node(data)
    let currentNode = this.root

    if (!currentNode) {
      this.root = newNode
    } else {
      let parent
      while(parent = currentNode) {
        if (data < currentNode.data) {
          currentNode = currentNode.left
          if (!currentNode) {
            parent.left = newNode
            break
          }
        } else {
          currentNode = currentNode.right
          if (!currentNode) {
            parent.right = newNode
            break
          }
        }
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
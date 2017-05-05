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
    let currentNode = this.root
    while (currentNode.data != data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      }
      else {
        currentNode = currentNode.right
      }
      if (!currentNode) {
        return null
      }
    }
    return currentNode
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
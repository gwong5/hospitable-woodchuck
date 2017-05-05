import Node from './node'

export default class LinkedList {
  constructor() {
    this.head = null
    this._size = 0
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let currentNode = this.head
    if (this._size === 0) {
      return null
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  contains(data) {
    let currentNode = this.head
    while (currentNode.data != data) {
      currentNode = currentNode.next
      if (currentNode.data != data && currentNode.next === null) {
        return false
      }
    }
      if (currentNode.data === data) {
         return true
      }
  }

  find(data) {
    let currentNode = this.head
    while (currentNode.data != data) {
      currentNode = currentNode.next
      if (currentNode.data != data && currentNode.next === null) {
        return -1
      }
    }
    return currentNode
  }

  insert(data) {
    const newNode = new Node(data)
    let currentNode = this.head
    if (!currentNode) {
      this.head = newNode
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    this._size++
  }

  insertFirst(data) {
    let newHead = new Node(data)
    newHead.next = this.head
    this.head = newHead
    this._size++
  }

  insertBefore(node1, node2) {
    let newNode = new Node(node2)
    let currentNode = this.head
    let prevNodes = new Node(currentNode.data)
    
    if (!currentNode.next) {
        newNode.next = (prevNodes = currentNode)
        this.head = newNode
    } else if (this.find(node1) != -1) {
      const foundNode = this.find(node1)

      while (currentNode.next.data != node1) {
        prevNodes.setNext(currentNode.data)
        currentNode = currentNode.next
      }
      newNode.next = foundNode
      prevNodes.next = newNode
      this.head = prevNodes
    } else {
      return null
    }
    this._size++
  }

  insertAfter(node1, node2) {
    let newNode = new Node(node2)
    let currentNode = this.head
    let prevNodes = new Node(currentNode.data)


    if (this.find(node1) != -1) {
      while (currentNode.data != node1) {
        prevNodes.setNext(new Node(currentNode.data))
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next
      currentNode.next = newNode

      if (this._size != 1) {
        prevNodes.next.next = currentNode
      } else {
        prevNodes = currentNode
      }
      this.head = prevNodes
    } else {
      return null
    }
    this._size++
  }

  remove() {
    let currentNode = this.head
    if(this._size === 1) {
      this.head = null
      this._size--
    } else if (this._size === 2) {
      currentNode.next = null
      this._size--
    } else {
      while (currentNode.next.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = null
      this._size--
    }
  }

  removeFirst() {
    this.head = this.head.next
    this._size--
  }

  isEmpty() {
    return this._size === 0 ? true : false
  }

  size() {
    return this._size
  }

  clear() {
    this.head = null
    this._size = 0
  }
}
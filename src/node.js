export default class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  getData() {
    return this.data
  }

  setNext(node) {
    this.next = node
    return this
  }

  getNext() {
    return this.next
  }
}
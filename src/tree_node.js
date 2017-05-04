export default class TreeNode {

  constructor(data) {
    this.data = data.data
    this.left = data.left || null
    this.right = data.right || null
  }

  getData() {
    return this.data
  }

  getLeft() {
    return this.left
  }

  setLeft(node) {
    if (node instanceof TreeNode) {
      this.left = node
      return this
    } else {
      return null
    }
  }

  getRight() {
    return this.right
  }

  setRight(node) {
    if (node instanceof TreeNode) {
      this.right = node
      return this
    } else {
      return null
    }
  }
}
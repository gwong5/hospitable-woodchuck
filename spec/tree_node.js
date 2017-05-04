import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import TreeNode from '../src/tree_node'

describe('TreeNode', () => {
  it('is a function', () => {
    expect(TreeNode).to.be.a('function')
  })

  context('getData()', () => {
    it('returns the node\'s data', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

      expect(midNode.getData()).to.eql(7)
    })
  })

  context('getLeft()', () => {
    it('returns the left node or null if none', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

      expect(midNode.getLeft()).to.eql(leastNode)
    })

    it('returns the left node or null if none', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: null, right: moreNode})

      expect(midNode.getLeft()).to.be.null
    })
  })

  context('setLeft(node)', () => {
    it('changes the reference to the left node and returns the original node', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})
      const newNode = new TreeNode({data: 4})

      expect(midNode.setLeft(newNode)).to.eql( { data: 7, left: newNode, right: moreNode } )
    })

    it('returns null if new reference is not a TreeNode', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})
      const newNode = new TreeNode({data: 4})

      expect(midNode.setLeft(newNode)).to.eql( { data: 7, left: newNode, right: moreNode } )
    })
  })

  context('getRight()', () => {
    it('returns the right node', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

      expect(midNode.getRight()).to.eql(moreNode)
    })

    it('returns null if none', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: null})

      expect(midNode.getRight()).to.be.null
    })
  })

  context('setRight()', () => {
    it('changes the reference to the right node and returns the original node', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})
      const newNode = new TreeNode({data: 4})

      expect(midNode.setRight(newNode)).to.eql( { data: 7, left: leastNode, right: newNode } )
    })

    it('returns null if new reference is not a TreeNode', () => {
      const leastNode = new TreeNode({data: 3})
      const moreNode = new TreeNode({data: 10})
      const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})
      const newNode = new TreeNode({data: 4})

      expect(midNode.setRight('something')).to.be.null
    })
  })
})

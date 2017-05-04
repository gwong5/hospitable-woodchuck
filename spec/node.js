import Node from '../src/node'
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'

describe('Node', () => {
  it('is a function', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', () => {
    it('returns data from a node', () => {
      const nodeA = new Node('apple')
      const nodeB = new Node('banana')

      expect(nodeA.getData()).to.eql('apple')
    })
  })

  context('setNext(node)', () => {
    it('changes the reference to the next node and returns the original node', () => {
      const nodeA = new Node('apple')
      const nodeB = new Node('banana')
      nodeA.setNext(nodeB)

      expect(nodeA.setNext(nodeB)).to.eql({ data: 'apple', next: { data: 'banana', next: null } })
    })
  })

  context('getNext()', () => {
    it('returns the next node', () => {
      const nodeA = new Node('apple')
      const nodeB = new Node('banana')
      nodeB.setNext(nodeA)

      expect(nodeB.getNext()).to.eql({ data: 'apple', next: null })
    })

    it('returns null if no next node', () => {
      const nodeA = new Node('apple')
      const nodeB = new Node('banana')

      expect(nodeB.getNext()).to.eql(null)
    })
  })
})